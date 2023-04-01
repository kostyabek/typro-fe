import { RouteObject } from 'react-router-dom';
import { AuthPages, Groups } from '../../../utils';
import { SignInPage, SignUpPage, signUpAction, ForgotPasswordPage, signInAction } from './pages';

export const AuthRoutes: RouteObject[] = [
  {
    path: Groups.Auth,
    children: [
      { path: AuthPages.SignIn, element: <SignInPage />, action: signInAction },
      { path: AuthPages.SignUp, element: <SignUpPage />, action: signUpAction },
      { path: AuthPages.ForgotPassword, element: <ForgotPasswordPage /> }
    ]
  }
];
