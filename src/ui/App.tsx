import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppTheme } from '../shared';
import { useAppDispatch, userActions } from '../state';
import { router } from './common';
import { getAccessToken, setFaviconBasedOnTheme } from '../utils';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const token = getAccessToken();
  useEffect(() => {
    if (token !== null) {
      dispatch(userActions.setIsAuthenticated(true));
    }
  }, [token]);

  const theme = useAppTheme();
  setFaviconBasedOnTheme(theme.palette.mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
