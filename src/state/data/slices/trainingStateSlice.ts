import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TrainingState = 'initial' | 'started' | 'finished';

interface TrainingStateSlice {
  state: TrainingState;
  wordsTyped: number;
}

const initialState: TrainingStateSlice = {
  state: 'initial',
  wordsTyped: 0
};

const slice = createSlice({
  name: 'data/trainingState',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<TrainingState>) => {
      state.state = action.payload;
    },
    setWordsTyped: (state, action: PayloadAction<number>) => {
      state.wordsTyped = action.payload;
    }
  }
});

export const trainingStateActions = slice.actions;
export default slice.reducer;
