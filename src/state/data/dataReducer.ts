import { combineReducers } from '@reduxjs/toolkit';

import trainingConfiguration from './slices/trainingConfigurationSlice';
import trainingResults from './slices/trainingResultsSlice';
import user from './slices/userSlice';
import trainingState from './slices/trainingStateSlice';
import multiplayer from './slices/multiplayerSlice';

export const dataReducer = combineReducers({
  trainingConfiguration,
  trainingResults,
  user,
  trainingState,
  multiplayer
});
