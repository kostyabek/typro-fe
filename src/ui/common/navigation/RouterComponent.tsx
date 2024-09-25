import { createBrowserRouter } from 'react-router-dom';

import { Groups } from '../../../utils';
import {
  AboutRoutes,
  HomeRoutes,
  LeaderboardsRoutes,
  MultiplayerRoutes,
  ProfileRoutes,
  SettingsRoutes,
  TrainingResultsRoutes,
  AuthRoutes
} from '../../groups';
import { RootLayout } from '../fragments';
import { NotFoundPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: Groups.Root,
    element: <RootLayout />,
    children: [
      ...HomeRoutes,
      ...AuthRoutes,
      ...ProfileRoutes,
      ...SettingsRoutes,
      ...MultiplayerRoutes,
      ...LeaderboardsRoutes,
      ...AboutRoutes,
      ...TrainingResultsRoutes,
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);
