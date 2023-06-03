import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastSlice {
  show: boolean;
  message: string;
}

const initialState: ToastSlice = {
  show: false,
  message: ''
};

const slice = createSlice({
  name: 'ui/toast',
  initialState,
  reducers: {
    setUpToast: (state, action: PayloadAction<string>) => {
      state.show = true;
      state.message = action.payload;
    },
    unsetToast: (state) => {
      state.show = false;
      state.message = '';
    }
  }
});

export const toastActions = slice.actions;
export default slice.reducer;
