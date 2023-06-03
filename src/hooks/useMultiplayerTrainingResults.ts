import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trainingHttpClient } from '../httpClients';
import {
  trainingResultsActions,
  trainingStateActions,
  useAppDispatch,
  useAppSelector
} from '../state';
import { CharactersStats, TimeModeType, TrainingResults, WordsModeType } from '../types';
import { Groups, ensure, isUserAuthenticated } from '../utils';
import { useAxiosPrivate } from './useAxiosPrivate';
import { Stopwatch } from './useStopwatch';

export const useMultiplayerTrainingResults = (stopwatch: Stopwatch): void => {
  const dispatch = useAppDispatch();
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const trainingResults = useAppSelector((store) => store.data.trainingResults);
  const trainingState = useAppSelector((store) => store.data.trainingState.state);
  const { place } = useAppSelector((store) => store.data.multiplayer);
  const isAuthenticated = isUserAuthenticated();

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const resultsCallback = (): TrainingResults => {
    const milliseconds =
      trainingConfiguration.timeMode === TimeModeType.TurnedOff
        ? stopwatch.getTimeInMilliseconds()
        : trainingConfiguration.timeMode * 1000;
    const correctLetterCount = trainingResults.letterStatuses.filter((s) => s === 'correct').length;
    const incorrectLetterCount = trainingResults.letterStatuses.filter(
      (s) => s === 'incorrect'
    ).length;
    const initialLetterCount = trainingResults.letterStatuses.filter((s) => s === 'initial').length;
    const extraLetterCount = trainingResults.letterStatuses.filter((s) => s === 'extra').length;
    const charactersStats: CharactersStats = {
      correct: correctLetterCount,
      incorrect: incorrectLetterCount,
      extra: extraLetterCount,
      initial: initialLetterCount
    };
    const affectedLettersCount = trainingResults.letterStatuses.filter(
      (s) => s !== 'initial'
    ).length;
    const accuracy = (correctLetterCount / affectedLettersCount) * 100;
    const wordsPerMinute = trainingResults.letterStatuses.length / (milliseconds / 1000 / 60) / 5;

    let finalPlace: number;
    if (trainingConfiguration.wordsMode !== WordsModeType.TurnedOff) {
      finalPlace = place;
    } else {
      // TODO Make time mode training rely on back-end server as a source of truth
      finalPlace = -1;
    }

    return {
      timeInMilliseconds: milliseconds,
      accuracy,
      charactersStats,
      wordsPerMinute,
      place: finalPlace
    };
  };

  const stubResults = async (): Promise<void> => {
    const stubId = await trainingHttpClient.createTrainingResults(axiosPrivate, {
      wordsModeType: trainingConfiguration.wordsMode,
      timeModeType: trainingConfiguration.timeMode,
      languageId: ensure(trainingConfiguration.languagesInfo.find((e) => e.isActive)).id,
      dateConducted: new Date()
    });

    dispatch(trainingResultsActions.setId(stubId));
  };

  const updateResults = async (results: TrainingResults): Promise<void> => {
    await trainingHttpClient.updateTrainingResults(
      axiosPrivate,
      {
        accuracy: results.accuracy,
        timeInMilliseconds: results.timeInMilliseconds,
        charactersStats: results.charactersStats,
        wordsPerMinute: results.wordsPerMinute
      },
      trainingResults.id
    );
  };

  useEffect(() => {
    if (trainingState === 'started' && isAuthenticated) {
      void stubResults();
    }
  }, [trainingState]);

  useEffect(() => {
    if (trainingResults.letterStatuses.length > 0) {
      const trainingResults = resultsCallback();
      if (isAuthenticated) {
        void updateResults(trainingResults);
      }
      dispatch(trainingResultsActions.setTrainingResults(trainingResults));
      dispatch(trainingStateActions.setState('initial'));
      navigate(Groups.TrainingResults);
    }
  }, [trainingResults.letterStatuses, isAuthenticated, updateResults, stopwatch]);
};
