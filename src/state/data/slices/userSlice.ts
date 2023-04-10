import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../../types';

interface UserSlice {
  info: UserInfo;
}

const initialState: UserSlice = {
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
    }
  }
});

export const userActions = slice.actions;
export default slice.reducer;
