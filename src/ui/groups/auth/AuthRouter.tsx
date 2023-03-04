import { Route, Routes } from 'react-router-dom';
import { AuthPages } from '../../../utils';
import { SignInPage, SignUpPage, ForgotPasswordPage } from './pages';

export const AuthRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path={AuthPages.SignIn} element={<SignInPage />} />
      <Route path={AuthPages.SignUp} element={<SignUpPage />} />
      <Route path={AuthPages.ForgotPassword} element={<ForgotPasswordPage />} />
    </Routes>
  );
};
