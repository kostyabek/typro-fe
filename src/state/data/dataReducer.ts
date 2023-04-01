import { combineReducers } from '@reduxjs/toolkit';
import trainingConfiguration from './slices/trainingConfigurationSlice';
import trainingResults from './slices/trainingResultsSlice';
import user from './slices/userSlice';

export const dataReducer = combineReducers({ trainingConfiguration, trainingResults, user });
