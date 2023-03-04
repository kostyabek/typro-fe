import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Groups } from '../../../utils';
import { LoaderElement } from '../elements';

const HomeGroup = lazy(async () => await import('../../groups/home/HomeGroup'));
const AuthGroup = lazy(async () => await import('../../groups/auth/AuthGroup'));
const ProfileGroup = lazy(async () => await import('../../groups/profile/ProfileGroup'));

export const RouterComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<LoaderElement />}>
      <Routes>
        <Route path={Groups.Home} element={<HomeGroup />} />
        <Route path={Groups.Auth} element={<AuthGroup />} />
        <Route path={Groups.Profile} element={<ProfileGroup />} />
      </Routes>
    </Suspense>
  );
};
