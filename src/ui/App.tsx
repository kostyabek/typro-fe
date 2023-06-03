import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { useAppTheme } from '../common';
import { LoaderElement, router } from './common';
import { setFaviconBasedOnTheme } from '../utils';
import { createStyles } from './styles';
import { useAppInitialization } from '../hooks';

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
