import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserInfo } from '../../../types';

interface UserSlice {
  accessToken: string;
  info: UserInfo;
}

const initialState: UserSlice = {
  accessToken: '',
  info: {
    nickname: ''
  }
};

const slice = createSlice({
  name: 'data/user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    }
  }
});

export const userActions = slice.actions;
export default slice.reducer;
