import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LetterStatus, TrainingResults } from '../../../types';

interface LetterStatuses {
  letterStatuses: LetterStatus[];
}
type TrainingResultsSlice = TrainingResults & LetterStatuses;

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
  letterStatuses: []
};

const slice = createSlice({
  name: 'data/trainingResults',
  initialState,
  reducers: {
    setTrainingResults: (state, action: PayloadAction<TrainingResults>) => {
      return {
        ...action.payload,
        letterStatuses: []
      };
    },
    addLetterStatuses: (state, action: PayloadAction<LetterStatus[]>) => {
      state.letterStatuses = state.letterStatuses.concat(action.payload);
    }
  }
});

export const trainingResultsActions = slice.actions;
export default slice.reducer;
