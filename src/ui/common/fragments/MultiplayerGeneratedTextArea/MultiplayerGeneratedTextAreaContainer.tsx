import { Box, Fade } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useContext } from 'react';
import { useAxiosPrivate, useStopwatch, useMultiplayerTrainingResults } from '../../../../hooks';
import { trainingHttpClient } from '../../../../httpClients';
import {
  useAppDispatch,
  useAppSelector,
  trainingStateActions,
  trainingResultsActions,
  trainingConfigurationActions,
  multiplayerActions
} from '../../../../state';
import { WordsModeType, LetterStatus, TimeModeType, AppPresenceData } from '../../../../types';
import { ensure, sleep } from '../../../../utils';
import { MultiplayerGeneratedTextAreaFragment } from './MultiplayerGeneratedTextAreaFragment';
import { WordProps, Word } from './elements';
import { useChannel } from '@ably-labs/react-hooks';
import { RestartContext } from '../../../../contexts';

const stopwatchTaskName = 'training';

export const MultiplayerGeneratedTextAreaContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const trainingState = useAppSelector((store) => store.data.trainingState.state);
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const { updatePresence, lobbyInfo, isCreator, place } = useAppSelector(
    (store) => store.data.multiplayer
  );
  const axiosPrivate = useAxiosPrivate();
  const { isRestartScheduled, setRestartScheduledStatus } = useContext(RestartContext);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});

  const [wordStates, setWordStates] = useState<WordProps[]>([]);

  const stopwatch = useStopwatch(stopwatchTaskName);
  useMultiplayerTrainingResults(stopwatch);

  useChannel(lobbyInfo.channelId, 'start-training', () => {
    dispatch(trainingStateActions.setState('started'));
    stopwatch.start();
  });

  const { data } = useQuery({
    queryKey: [
      'multiplayerGeneratedText',
      trainingConfiguration.areNumbersGenerated,
      trainingConfiguration.isPunctuationGenerated,
      trainingConfiguration.timeMode,
      trainingConfiguration.wordsMode,
      trainingConfiguration.languagesInfo,
      isCreator,
      lobbyInfo.lobbyId
    ],
    queryFn: async () => {
      const data = await trainingHttpClient.getMultiplayerGeneratedText(axiosPrivate, {
        areNumbersGenerated: trainingConfiguration.areNumbersGenerated,
        isPunctuationGenerated: trainingConfiguration.isPunctuationGenerated,
        timeMode: trainingConfiguration.timeMode,
        wordsMode: trainingConfiguration.wordsMode,
        languageId: ensure(trainingConfiguration.languagesInfo.find((e) => e.isActive)).id,
        lobbyId: lobbyInfo.lobbyId,
        isForceRewrite: isCreator
      });

      await sleep(100);
      dispatch(trainingStateActions.setWordsTyped(0));
      dispatch(trainingStateActions.setState('initial'));

      if (!isCreator) {
        dispatch(trainingConfigurationActions.setActiveLanguage(data.languageId));
        dispatch(trainingConfigurationActions.setNumbersGeneration(data.areNumbersEnabled));
        dispatch(trainingConfigurationActions.setPunctuationGeneration(data.isPunctuationEnabled));
        dispatch(trainingConfigurationActions.setWordsMode(data.wordsMode));
        dispatch(trainingConfigurationActions.setTimeMode(data.timeMode));
      }

      setRestartScheduledStatus(false);

      return data.symbols;
    },
    enabled: isRestartScheduled && trainingConfiguration.languagesInfo.length > 0
  });

  useEffect(() => {
    if (
      trainingState === 'finished' &&
      trainingConfiguration.wordsMode !== WordsModeType.TurnedOff
    ) {
      stopwatch.stop();
    }
  }, [trainingState, trainingConfiguration.wordsMode]);

  const letterStatusesSubmissionHandler = (letterStatuses: LetterStatus[]): void => {
    if (trainingConfiguration.wordsMode !== WordsModeType.TurnedOff) {
      dispatch(trainingResultsActions.addLetterStatuses(letterStatuses));
    } else {
      const nonInitialLetterStatuses = letterStatuses.filter((e) => e !== 'initial');
      dispatch(trainingResultsActions.addLetterStatuses(nonInitialLetterStatuses));
    }
  };

  const requestAdditionalWords = async (): Promise<void> => {
    const data = await trainingHttpClient.getGeneratedText({
      ...trainingConfiguration,
      languageId: ensure(trainingConfiguration.languagesInfo.find((e) => e.isActive)).id
    });

    setWordStates((prevStates) => {
      const newStates = data.map<WordProps>((wordChars, wordCharsIndex) => {
        return {
          isDisabled: trainingState !== 'started',
          letters: wordChars,
          isActive: false,
          isCounted: false,
          onMoveToAnotherWord: moveOnToAnotherWordHandler,
          onTrainingStart: () => {},
          onWordModeTrainingEnd: letterStatusesSubmissionHandler
        };
      });
      return [...prevStates, ...newStates];
    });
  };

  const moveOnToAnotherWordHandler = (isForward: boolean): void => {
    setWordStates((oldStates) => {
      const activeWordIndex = oldStates.findIndex((s) => s.isActive);
      if (activeWordIndex === 0 && !isForward) {
        return oldStates;
      }

      if (isForward && trainingConfiguration.timeMode !== TimeModeType.TurnedOff) {
        const shouldRequestWords = oldStates.filter((e) => !e.isCounted).length < 21;
        if (shouldRequestWords) {
          void requestAdditionalWords();
        }
      }

      if (activeWordIndex === oldStates.length - 1 && isForward) {
        const currentPlace: number = place;
        channel.publish('increment-place', { incrementedPlace: currentPlace + 1 });
        dispatch(trainingStateActions.setState('finished'));
        return oldStates;
      }

      const newStates = [...oldStates];
      const newWordState = newStates[activeWordIndex];
      newWordState.isActive = false;
      if (isForward && !newWordState.isCounted) {
        newWordState.isCounted = true;
      }

      const wordToMoveOnToIndex = isForward ? activeWordIndex + 1 : activeWordIndex - 1;
      newStates[wordToMoveOnToIndex].isActive = true;

      const completedWords = newStates.filter((s) => s.isCounted);
      const numberOfCompletedWords = completedWords.length;
      let newPresenceData: AppPresenceData;

      if (trainingConfiguration.wordsMode !== WordsModeType.TurnedOff) {
        const completedLettersQty = completedWords.flatMap((e) => e.letters).length;
        const allLettersQty = newStates.flatMap((e) => e.letters).length;

        newPresenceData = {
          isCreator,
          indicatorValue: (completedLettersQty / allLettersQty) * 100,
          place
        };
        updatePresence(newPresenceData);
      } else {
        newPresenceData = {
          isCreator,
          indicatorValue: numberOfCompletedWords,
          place
        };
        updatePresence(newPresenceData);
      }

      dispatch(trainingStateActions.setWordsTyped(numberOfCompletedWords));
      dispatch(multiplayerActions.setIndicatorValue(newPresenceData.indicatorValue));

      return newStates;
    });
  };

  const generatedText: string[][] = data ?? [];
  useEffect(() => {
    if (generatedText.length > 0) {
      setWordStates(
        generatedText.map<WordProps>((wordChars, wordCharsIndex) => {
          return {
            isDisabled: trainingState !== 'started',
            letters: wordChars,
            isActive: wordCharsIndex === 0,
            isCounted: false,
            onMoveToAnotherWord: moveOnToAnotherWordHandler,
            onTrainingStart: () => {},
            onWordModeTrainingEnd: letterStatusesSubmissionHandler
          };
        })
      );
    }
  }, [generatedText, setWordStates, trainingState]);

  const words = wordStates.map((wordState, index) => <Word key={`word_${index}`} {...wordState} />);

  return (
    <Fade in={!isRestartScheduled}>
      <Box>
        <MultiplayerGeneratedTextAreaFragment words={words} />
      </Box>
    </Fade>
  );
};
