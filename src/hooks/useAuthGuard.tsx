import { Navigate } from 'react-router-dom';
import { AuthPages, Groups, getAccessToken } from '../utils';

export const useAuthGuard = (protectedContent: JSX.Element): JSX.Element => {
  const token = getAccessToken();
  if (token === null) {
    return <Navigate to={`${Groups.Auth}/${AuthPages.SignIn}`} />;
  }

  return protectedContent;
};
