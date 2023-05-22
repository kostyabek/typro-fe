import { Fade, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState, useEffect } from 'react';
import { RestartContext } from '../../../../contexts';
import { useStopwatch, useTrainingResults } from '../../../../hooks';
import { trainingHttpClient } from '../../../../httpClients';
import {
  useAppDispatch,
  useAppSelector,
  trainingStateActions,
  trainingResultsActions
} from '../../../../state';
import { WordsModeType, LetterStatus, TimeModeType } from '../../../../types';
import { ensure, sleep } from '../../../../utils';
import { GeneratedTextAreaFragment } from './GeneratedTextAreaFragment';
import { WordProps, Word } from './elements';

const stopwatchTaskName = 'training';

export const GeneratedTextAreaContainer = (): JSX.Element => {
  const { isRestartScheduled, setRestartScheduledStatus } = useContext(RestartContext);

  const dispatch = useAppDispatch();
  const { state: trainingState } = useAppSelector((store) => store.data.trainingState);
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);

  const [wordStates, setWordStates] = useState<WordProps[]>([]);

  const stopwatch = useStopwatch(stopwatchTaskName);
  useTrainingResults(stopwatch);

  const { data } = useQuery({
    queryKey: ['generatedText', trainingConfiguration],
    queryFn: async () => {
      const data = await trainingHttpClient.getGeneratedText({
        ...trainingConfiguration,
        languageId: ensure(trainingConfiguration.languagesInfo.find((e) => e.isActive)).id
      });

      await sleep(100);
      setRestartScheduledStatus(false);
      dispatch(trainingStateActions.setWordsTyped(0));
      dispatch(trainingStateActions.setState('initial'));

      return data;
    },
    enabled: isRestartScheduled && trainingConfiguration.languagesInfo.length > 0
  });

  const trainingStartHandler = (): void => {
    dispatch(trainingStateActions.setState('started'));
    if (trainingConfiguration.wordsMode !== WordsModeType.TurnedOff) {
      stopwatch.start();
    }
  };

  useEffect(() => {
    if (
      trainingState === 'finished' &&
      trainingConfiguration.wordsMode !== WordsModeType.TurnedOff
    ) {
      stopwatch.stop();
    }
  }, [trainingState]);

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
          letters: wordChars,
          isActive: false,
          isCounted: false,
          onMoveToAnotherWord: moveOnToAnotherWordHandler,
          onTrainingStart: trainingStartHandler,
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

      const numberOfCompletedWords = newStates.filter((s) => s.isCounted).length;
      dispatch(trainingStateActions.setWordsTyped(numberOfCompletedWords));

      return newStates;
    });
  };

  const generatedText: string[][] = data ?? [];
  useEffect(() => {
    if (generatedText.length > 0) {
      setWordStates(
        generatedText.map<WordProps>((wordChars, wordCharsIndex) => {
          return {
            letters: wordChars,
            isActive: wordCharsIndex === 0,
            isCounted: false,
            onMoveToAnotherWord: moveOnToAnotherWordHandler,
            onTrainingStart: trainingStartHandler,
            onWordModeTrainingEnd: letterStatusesSubmissionHandler
          };
        })
      );
    }
  }, [generatedText, setWordStates]);

  const words = wordStates.map((wordState, index) => <Word key={`word_${index}`} {...wordState} />);

  return (
    <Fade in={!isRestartScheduled}>
      <Box>
        <GeneratedTextAreaFragment words={words} />
      </Box>
    </Fade>
  );
};
