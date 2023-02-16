import { Route, Routes } from 'react-router-dom';
import { ProfilePages } from '../../../utils';
import { ProfilePage } from './pages';

export const ProfileRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path={ProfilePages.Profile} element={<ProfilePage />} />
    </Routes>
  );
};
