import { Box, CircularProgress } from '@mui/material';
import * as styles from './styles';

export const LoaderElement = (): JSX.Element => {
  return (
    <Box sx={styles.container}>
      <CircularProgress color="inherit" />
    </Box>
  );
};
