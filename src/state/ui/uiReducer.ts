import { combineReducers } from '@reduxjs/toolkit';
import trainingState from './slices/trainingStateSlice';
import theme from './slices/themeSlice';

export const uiReducer = combineReducers({ trainingState, theme });
