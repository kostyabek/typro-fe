import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Groups } from '../../../utils';

const HomeGroup = lazy(async () => await import('../../groups/home/HomeGroup'));
const ProfileGroup = lazy(async () => await import('../../groups/profile/ProfileGroup'));

export const RouterComponent = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Groups.Home} element={<HomeGroup />} />
      <Route path={Groups.Profile} element={<ProfileGroup />} />
    </Routes>
  );
};
