import { RouteObject } from 'react-router-dom';
import { Groups } from '../../../utils';
import { Protected } from '../Protected';
import { ProfilePage } from './pages';

export const ProfileRoutes: RouteObject[] = [
  {
    path: Groups.Profile,
    children: [
      {
        element: (
          <Protected>
            <ProfilePage />
          </Protected>
        ),
        index: true
      }
    ]
  }
];
