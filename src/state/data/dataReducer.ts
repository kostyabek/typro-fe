import { combineReducers } from '@reduxjs/toolkit';
import trainingConfiguration from './slices/trainingConfigurationSlice';
import trainingResults from './slices/trainingResultsSlice';

export const dataReducer = combineReducers({ trainingConfiguration, trainingResults });
