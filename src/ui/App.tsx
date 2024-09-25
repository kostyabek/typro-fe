import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import { useAppTheme } from '../common';
import { setFaviconBasedOnTheme } from '../utils';
import { useAppInitialization } from '../hooks';

import { LoaderElement, router } from './common';
import { createStyles } from './styles';


export const App = (): JSX.Element => {
  const isInitialized = useAppInitialization();

  const theme = useAppTheme();
  setFaviconBasedOnTheme(theme.palette.mode);
  const styles = createStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.scrollOverrideContainer}>
        {isInitialized ? <RouterProvider router={router} /> : <LoaderElement />}
      </Box>
    </ThemeProvider>
  );
};
