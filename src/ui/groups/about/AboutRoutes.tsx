import { RouteObject } from 'react-router-dom';

import { Groups } from '../../../utils';

import { AboutPage } from './pages';

export const AboutRoutes: RouteObject[] = [
  { path: Groups.About, children: [{ element: <AboutPage />, index: true }] }
];
