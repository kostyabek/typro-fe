import { RouteObject } from 'react-router-dom';
import { Groups } from '../../../utils';
import { MultiplayerPage } from './pages';

export const MultiplayerRoutes: RouteObject[] = [
  { path: Groups.Multiplayer, children: [{ element: <MultiplayerPage />, index: true }] }
];
