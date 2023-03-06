import { createBrowserRouter } from 'react-router-dom';
import { Groups } from '../../../utils';
import {
  AboutRoutes,
  HomeRoutes,
  LeaderboardsRoutes,
  MultiplayerRoutes,
  ProfileRoutes,
  SettingsRoutes
} from '../../groups';
import { AuthRoutes } from '../../groups/auth';
import { RootLayout } from '../fragments';

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
      ...AboutRoutes
    ]
  }
]);
