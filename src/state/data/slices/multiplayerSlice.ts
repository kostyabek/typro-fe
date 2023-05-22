import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LobbyInfo } from '../../../types';

interface MultiplayerSlice {
  isActive: boolean;
  isCreator: boolean;
  lobbyInfo: LobbyInfo;
}

const initialState: MultiplayerSlice = {
  isActive: false,
  isCreator: false,
  lobbyInfo: {
    lobbyId: '',
    channelId: ''
  }
};

const slice = createSlice({
  name: 'data/multiplayer',
  initialState,
  reducers: {
    setLobbyInfo: (state, action: PayloadAction<LobbyInfo>) => {
      state.lobbyInfo = action.payload;
      state.isActive = true;
    },
    setIsCreatorStatus: (state, action: PayloadAction<boolean>) => {
      state.isCreator = action.payload;
    },
    setLobbyAsNotActive: (state) => {
      state.isActive = false;
    }
  }
});

export const multiplayerActions = slice.actions;
export default slice.reducer;
