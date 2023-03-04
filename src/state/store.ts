import { configureStore } from '@reduxjs/toolkit';
import { dataReducer as data } from './data';

export const store = configureStore({ reducer: { data } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
