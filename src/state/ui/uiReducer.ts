import { combineReducers } from '@reduxjs/toolkit';
import trainingState from './slices/trainingStateSlice';

export const uiReducer = combineReducers({ trainingState });
