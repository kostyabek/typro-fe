import { RouteObject } from 'react-router-dom';

import { Groups } from '../../../utils';

import { TrainingResultsPage } from './pages';

export const TrainingResultsRoutes: RouteObject[] = [
  { path: Groups.TrainingResults, children: [{ element: <TrainingResultsPage />, index: true }] }
];
