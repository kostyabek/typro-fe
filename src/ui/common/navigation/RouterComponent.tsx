import { createBrowserRouter } from 'react-router-dom';
import { Groups } from '../../../utils';
import {
  AboutRoutes,
  HomeRoutes,
  LeaderboardsRoutes,
  MultiplayerRoutes,
  ProfileRoutes,
  SettingsRoutes,
  TrainingResultsRoutes
} from '../../groups';
import { AuthRoutes } from '../../groups/auth';
import { RootLayout } from '../fragments';
import { ErrorPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: Groups.Root,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...HomeRoutes,
      ...AuthRoutes,
      ...ProfileRoutes,
      ...SettingsRoutes,
      ...MultiplayerRoutes,
      ...LeaderboardsRoutes,
      ...AboutRoutes,
      ...TrainingResultsRoutes
    ]
  }
]);
