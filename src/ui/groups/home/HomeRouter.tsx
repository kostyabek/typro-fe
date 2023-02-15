import { Route, Routes } from 'react-router-dom';
import { HomePages } from '../../../utils';
import { HomePage } from './pages';

export const HomeRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path={HomePages.Home} element={<HomePage />} />
    </Routes>
  );
};
