import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { authHttpClient } from '../../../../../httpClients';
import { useAppDispatch, useAppSelector, userActions } from '../../../../../state';
import { Groups, isUserAuthenticated, removeAccessToken } from '../../../../../utils';
import { LoaderElement } from '../../../../common';
import { useAxiosPrivate } from '../../../../../hooks';

export const SignOutPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((store) => store.data.user.accessToken);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const signOutHandler = async (): Promise<void> => {
      await authHttpClient.signOut(axiosPrivate);
      removeAccessToken();
      dispatch(userActions.setAccessToken(''));
      dispatch(userActions.setUserInfo({ nickname: '' }));
    };

    if (isUserAuthenticated()) {
      void signOutHandler();
    }
  }, []);

  return accessToken === '' ? <Navigate to={Groups.Home} /> : <LoaderElement />;
};
