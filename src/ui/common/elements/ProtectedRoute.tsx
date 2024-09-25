import { Navigate } from 'react-router-dom';

import { AuthPages, Groups, getAccessToken } from '../../../utils';

type Props = {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props): JSX.Element => 
  getAccessToken() === null ? (
    <Navigate to={`${Groups.Auth}/${AuthPages.SignIn}`} />
  ) : (
    children
  );
