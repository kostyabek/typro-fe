import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import * as styles from './styles';
import { GithubIcon } from './icons';

const FooterFragment = (): JSX.Element => {
  const version = process.env.REACT_APP_VERSION;

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.contentContainer}>
        <GithubIcon />
        <Typography sx={styles.versionLabel}>v{version}</Typography>
      </Box>
    </Box>
  );
};

export default memo(FooterFragment);
