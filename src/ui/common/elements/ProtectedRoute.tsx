import { Navigate } from 'react-router-dom';
import { AuthPages, Groups, getAccessToken } from '../../../utils';

export const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  return getAccessToken() === null ? (
    <Navigate to={`${Groups.Auth}/${AuthPages.SignIn}`} />
  ) : (
    children
  );
};
