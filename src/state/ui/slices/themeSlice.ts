import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrainingStateSlice {
  mode: PaletteMode;
}

const initialState: TrainingStateSlice = {
  mode: 'light'
};

const slice = createSlice({
  name: 'ui/theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<PaletteMode>) => {
      state.mode = action.payload;
    }
  }
});

export const themeActions = slice.actions;
export default slice.reducer;
