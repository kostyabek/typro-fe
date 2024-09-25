import { configureStore } from '@reduxjs/toolkit';

import { dataReducer as data } from './data';
import { uiReducer as ui } from './ui';

export const store = configureStore({ reducer: { data, ui } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
