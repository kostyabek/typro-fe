import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  trainingResultsActions,
  trainingStateActions,
  useAppDispatch,
  useAppSelector
} from '../state';
import { TrainingConfiguration, TimeModeType, CharactersStats, TrainingResults } from '../types';
import { Groups } from '../utils';
import { Stopwatch } from './useStopwatch';

const getTrainingTypeName = (trainingConfiguration: TrainingConfiguration): string => {
  const language = trainingConfiguration.languageInfo.name;
  const isWordsMode = trainingConfiguration.timeMode === TimeModeType.TurnedOff;
  const mode = isWordsMode ? 'words' : 'time';
  const modeRelatedValue = Number(
    isWordsMode ? trainingConfiguration.wordsMode : trainingConfiguration.timeMode
  );

  /* eslint-disable @typescript-eslint/restrict-template-expressions  */
  return `${language} ${mode} ${modeRelatedValue}`;
};

export const useTrainingResults = (stopwatch: Stopwatch): void => {
  const dispatch = useAppDispatch();
  const letterStatuses = useAppSelector((store) => store.data.trainingResults.letterStatuses);
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const navigate = useNavigate();

  const resultsCallback = (milliseconds: number): TrainingResults => {
    const trainingType = getTrainingTypeName(trainingConfiguration);
    const correctLetterCount = letterStatuses.filter((s) => s === 'correct').length;
    const incorrectLetterCount = letterStatuses.filter((s) => s === 'incorrect').length;
    const initialLetterCount = letterStatuses.filter((s) => s === 'initial').length;
    const extraLetterCount = letterStatuses.filter((s) => s === 'extra').length;
    const charactersStats: CharactersStats = {
      correct: correctLetterCount,
      incorrect: incorrectLetterCount,
      extra: extraLetterCount,
      initial: initialLetterCount
    };
    const affectedLettersCount = letterStatuses.filter((s) => s !== 'initial').length;
    const accuracy = (correctLetterCount / affectedLettersCount) * 100;
    const wordsPerMinute = (letterStatuses.length * 60) / (milliseconds / 1000) / 5;

    return {
      timeInMilliseconds: milliseconds,
      trainingType,
      accuracy,
      charactersStats,
      wordsPerMinute
    };
  };

  useEffect(() => {
    if (letterStatuses.length > 0) {
      const trainingResults = resultsCallback(stopwatch.getTimeInMilliseconds());
      dispatch(trainingResultsActions.setTrainingResults(trainingResults));
      dispatch(trainingStateActions.setState('initial'));
      navigate(Groups.TrainingResults);
    }
  }, [letterStatuses]);
};
