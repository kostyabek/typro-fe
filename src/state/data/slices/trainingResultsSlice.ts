import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LetterStatus, TrainingResults } from '../../../types';

interface ResultsMetadata {
  id: number;
  letterStatuses: LetterStatus[];
}

type TrainingResultsSlice = TrainingResults & ResultsMetadata;

const initialState: TrainingResultsSlice = {
  wordsPerMinute: 0,
  accuracy: 0,
  timeInMilliseconds: 0,
  charactersStats: {
    initial: 0,
    correct: 0,
    extra: 0,
    incorrect: 0
  },
  letterStatuses: [],
  id: 0
};

const slice = createSlice({
  name: 'data/trainingResults',
  initialState,
  reducers: {
    setTrainingResults: (state, action: PayloadAction<TrainingResults>) => ({
        ...action.payload,
        letterStatuses: [],
        id: state.id
      }),
    addLetterStatuses: (state, action: PayloadAction<LetterStatus[]>) => {
      state.letterStatuses = state.letterStatuses.concat(action.payload);
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    }
  }
});

export const trainingResultsActions = slice.actions;
export default slice.reducer;
