import { RouterProvider } from 'react-router-dom';
import { router } from './common';

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
