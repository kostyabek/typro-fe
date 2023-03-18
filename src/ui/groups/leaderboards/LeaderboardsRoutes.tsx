import { RouteObject } from 'react-router-dom';
import { Groups } from '../../../utils';
import { LeaderboardsPage } from './pages';

export const LeaderboardsRoutes: RouteObject[] = [
  { path: Groups.Leaderboards, children: [{ element: <LeaderboardsPage />, index: true }] }
];
