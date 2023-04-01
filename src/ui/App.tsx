import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createMuiTheme } from '../shared';
import { useAppDispatch, useAppSelector, userActions } from '../state';
import { router } from './common';
import { getAccessToken } from '../utils';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const token = getAccessToken();
  if (token !== null) {
    dispatch(userActions.setIsAuthenticated(true));
  }

  const themeMode = useAppSelector((store) => store.ui.theme.mode);
  const theme = useMemo(() => createMuiTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
