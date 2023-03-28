import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TrainingState = 'initial' | 'started' | 'finished';

interface TrainingStateSlice {
  state: TrainingState;
}

const initialState: TrainingStateSlice = {
  state: 'initial'
};

const slice = createSlice({
  name: 'ui/trainingState',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<TrainingState>) => {
      state.state = action.payload;
    }
  }
});

export const trainingStateActions = slice.actions;
export default slice.reducer;
