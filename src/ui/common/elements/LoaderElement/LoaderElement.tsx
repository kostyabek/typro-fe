import { Box, CircularProgress, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { createStyles } from './styles';

export const LoaderElement = (): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Box sx={styles.container}>
      <CircularProgress color="inherit" />
    </Box>
  );
};
