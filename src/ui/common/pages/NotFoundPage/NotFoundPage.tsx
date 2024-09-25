import { Box, Typography } from '@mui/material';

import * as styles from './styles';

export const NotFoundPage = (): JSX.Element => (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.errorContainer}>
          <Typography sx={styles.title}>Not found!</Typography>
          <Typography sx={styles.message}>Could not find resource or page.</Typography>
        </Box>
      </Box>
    </Box>
  );
