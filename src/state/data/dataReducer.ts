import { combineReducers } from '@reduxjs/toolkit';
import training from './slices/trainingSlice';

export const dataReducer = combineReducers({ training });
