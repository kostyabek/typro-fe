import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../../types';

interface UserSlice {
  isAuthenticated: boolean;
  info: UserInfo;
}

const initialState: UserSlice = {
  isAuthenticated: false,
  info: {
    eMail: ''
  }
};

const slice = createSlice({
  name: 'data/user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    }
  }
});

export const userActions = slice.actions;
export default slice.reducer;
