import { RouteObject } from 'react-router-dom';
import { Groups } from '../../../utils';
import { ProfilePage } from './pages';

export const ProfileRoutes: RouteObject[] = [
  {
    path: Groups.Profile,
    children: [
      {
        element: <ProfilePage />,
        index: true
      }
    ]
  }
];
