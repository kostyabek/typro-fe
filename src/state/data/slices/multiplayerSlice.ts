import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppPresenceData, LobbyInfo } from '../../../types';

interface MultiplayerSlice {
  isActive: boolean;
  lobbyInfo: LobbyInfo;
  updatePresence: (messageOrPresenceObject: AppPresenceData) => void;
  isCreator: boolean;
  percentageOfCompleteness: number;
  place: number;
}

const initialState: MultiplayerSlice = {
  isActive: false,
  lobbyInfo: {
    lobbyId: '',
    channelId: ''
  },
  updatePresence: () => {},
  isCreator: false,
  percentageOfCompleteness: 0,
  place: 1
};

const slice = createSlice({
  name: 'data/multiplayer',
  initialState,
  reducers: {
    setLobbyInfo: (state, action: PayloadAction<LobbyInfo>) => {
      state.lobbyInfo = action.payload;
      state.isActive = true;
    },
    setLobbyAsNotActive: (state) => {
      state.isActive = false;
    },
    setUpdatePresenceMethod: (
      state,
      action: PayloadAction<(messageOrPresenceObject: AppPresenceData) => void>
    ) => {
      state.updatePresence = action.payload;
    },
    setIsCreator: (state, action: PayloadAction<boolean>) => {
      state.isCreator = action.payload;
    },
    setPercentageOfCompleteness: (state, action: PayloadAction<number>) => {
      state.percentageOfCompleteness = action.payload;
    },
    setPlace: (state, action: PayloadAction<number>) => {
      state.place = action.payload;
    }
  }
});

export const multiplayerActions = slice.actions;
export default slice.reducer;
