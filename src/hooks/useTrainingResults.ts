import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trainingHttpClient } from '../httpClients';
import {
  trainingResultsActions,
  trainingStateActions,
  useAppDispatch,
  useAppSelector
} from '../state';
import { CharactersStats, TrainingResults } from '../types';
import { Groups } from '../utils';
import { useAxiosPrivate } from './useAxiosPrivate';
import { Stopwatch } from './useStopwatch';

export const useTrainingResults = (stopwatch: Stopwatch): void => {
  const dispatch = useAppDispatch();
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const letterStatuses = useAppSelector((store) => store.data.trainingResults.letterStatuses);
  const isAuthenticated = useAppSelector((store) => store.data.user.isAuthenticated);

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const submitResults = async (results: TrainingResults): Promise<void> => {
    await trainingHttpClient.submitTrainingResults(axiosPrivate, {
      accuracy: results.accuracy,
      timeInMilliseconds: results.timeInMilliseconds,
      charactersStats: results.charactersStats,
      languageId: trainingConfiguration.languageInfo.id,
      timeModeType: trainingConfiguration.timeMode,
      wordsModeType: trainingConfiguration.wordsMode,
      wordsPerMinute: results.wordsPerMinute,
      dateConducted: new Date()
    });
  };

  const resultsCallback = (milliseconds: number): TrainingResults => {
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
      accuracy,
      charactersStats,
      wordsPerMinute
    };
  };

  useEffect(() => {
    if (letterStatuses.length > 0) {
      const trainingResults = resultsCallback(stopwatch.getTimeInMilliseconds());
      if (isAuthenticated) {
        void submitResults(trainingResults);
      }
      dispatch(trainingResultsActions.setTrainingResults(trainingResults));
      dispatch(trainingStateActions.setState('initial'));
      navigate(Groups.TrainingResults);
    }
  }, [letterStatuses, isAuthenticated, submitResults, stopwatch]);
};
