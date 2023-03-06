import { RouteObject } from 'react-router-dom';
import { Groups } from '../../../utils';
import { SettingsPage } from './pages';

export const SettingsRoutes: RouteObject[] = [
  { path: Groups.Settings, children: [{ element: <SettingsPage />, index: true }] }
];
