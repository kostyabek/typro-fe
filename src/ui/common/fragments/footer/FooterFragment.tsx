import { memo } from 'react';
import { Box, Fade, Typography } from '@mui/material';
import * as styles from './styles';
import { GithubIcon } from './icons';
import { useAppSelector } from '../../../../state';

const FooterFragment = (): JSX.Element => {
  const { state: trainingState } = useAppSelector((store) => store.ui.trainingState);

  const version = process.env.REACT_APP_VERSION;

  return (
    <Fade in={trainingState !== 'started'}>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.contentContainer}>
          <GithubIcon />
          <Typography sx={styles.versionLabel}>v{version}</Typography>
        </Box>
      </Box>
    </Fade>
  );
};

export default memo(FooterFragment);
