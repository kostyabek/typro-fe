import { combineReducers } from '@reduxjs/toolkit';
import theme from './slices/themeSlice';

export const uiReducer = combineReducers({ theme });
