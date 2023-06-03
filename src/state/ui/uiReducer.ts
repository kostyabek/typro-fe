import { combineReducers } from '@reduxjs/toolkit';
import theme from './slices/themeSlice';
import toast from './slices/toastSlice';

export const uiReducer = combineReducers({ theme, toast });
