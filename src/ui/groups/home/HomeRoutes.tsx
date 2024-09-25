import { RouteObject } from 'react-router-dom';

import { Groups } from '../../../utils';

import { HomePage } from './pages';

export const HomeRoutes: RouteObject[] = [
  { path: Groups.Home, children: [{ element: <HomePage />, index: true }] }
];
