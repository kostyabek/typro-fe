import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { useAppTheme } from '../shared';
import { router } from './common';
import { setFaviconBasedOnTheme } from '../utils';

export const App = (): JSX.Element => {
  const theme = useAppTheme();
  setFaviconBasedOnTheme(theme.palette.mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
