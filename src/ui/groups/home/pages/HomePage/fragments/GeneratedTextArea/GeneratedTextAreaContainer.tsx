import { Box, Fade } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { RestartContext } from '../../../../../../../contexts';
import { trainingHttpClient } from '../../../../../../../httpClients';
import {
  trainingStateActions,
  trainingResultsActions,
  useAppDispatch,
  useAppSelector
} from '../../../../../../../state';
import { LetterStatus, TimeModeType } from '../../../../../../../types';
import { TimeCounter, Word, WordCounter, WordProps } from './elements';
import { GeneratedTextAreaFragment } from './GeneratedTextAreaFragment';
import * as styles from './styles';
import { useStopwatch, useTrainingResults } from '../../../../../../../hooks';
import { sleep } from '../../../../../../../utils';

const stopwatchTaskName = 'training';

export const GeneratedTextAreaContainer = (): JSX.Element => {
  const { isRestartScheduled, setRestartScheduledStatus } = useContext(RestartContext);

  const dispatch = useAppDispatch();
  const { state: trainingState } = useAppSelector((store) => store.ui.trainingState);
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);

  const [wordStates, setWordStates] = useState<WordProps[]>([]);
  const [trainingRelatedValue, setTrainingRelatedValue] = useState(0);

  const stopwatch = useStopwatch(stopwatchTaskName);
  useTrainingResults(stopwatch);

  const queryResult = useQuery({
    queryKey: ['generatedText'],
    queryFn: async () => {
      const data = await trainingHttpClient.getGeneratedText({
        ...trainingConfiguration,
        languageId: trainingConfiguration.languageInfo.id
      });

      await sleep(100);
      setRestartScheduledStatus(false);
      setTrainingRelatedValue(0);
      dispatch(trainingStateActions.setState('initial'));

      return data;
    },
    enabled: isRestartScheduled
  });

  const trainingStartHandler = (): void => {
    dispatch(trainingStateActions.setState('started'));
    stopwatch.start();
  };

  useEffect(() => {
    if (trainingState === 'finished') {
      stopwatch.stop();
    }
  }, [trainingState]);

  const letterStatusesSubmissionHandler = (letterStatuses: LetterStatus[]): void => {
    dispatch(trainingResultsActions.addLetterStatuses(letterStatuses));
  };

  const moveOnToAnotherWordHandler = (isForward: boolean): void => {
    setWordStates((oldStates) => {
      const activeWordIndex = oldStates.findIndex((s) => s.isActive);
      if (activeWordIndex === 0 && !isForward) {
        return oldStates;
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
      setTrainingRelatedValue(numberOfCompletedWords);

      return newStates;
    });
  };

  const generatedText: string[][] = queryResult.data ?? [];
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
            onTrainingEnd: letterStatusesSubmissionHandler
          };
        })
      );
    }
  }, [generatedText, setWordStates]);

  const words = wordStates.map((wordState, index) => <Word key={`word_${index}`} {...wordState} />);

  const counter =
    trainingConfiguration.timeMode === TimeModeType.TurnedOff ? (
      <WordCounter wordsTyped={trainingRelatedValue} totalWords={trainingConfiguration.wordsMode} />
    ) : (
      <TimeCounter
        secondsLeft={trainingRelatedValue}
        onSecondsLeftChange={setTrainingRelatedValue}
      />
    );

  return (
    <Fade in={!isRestartScheduled}>
      <Box sx={styles.innerContainer}>
        {trainingState === 'started' && counter}
        <GeneratedTextAreaFragment words={words} />
      </Box>
    </Fade>
  );
};
