import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createMuiTheme } from '../shared';
import { useAppSelector } from '../state';
import { router } from './common';

export const App = (): JSX.Element => {
  const themeMode = useAppSelector((store) => store.ui.theme.mode);
  const theme = useMemo(() => createMuiTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
