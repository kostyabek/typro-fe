import { memo } from 'react';
import { Box, Fade, Typography } from '@mui/material';

import { useAppSelector } from '../../../../state';
import { AppLink } from '../../elements';
import { configuration } from '../../../../utils';

import { GithubIcon } from './icons';
import * as styles from './styles';

const FooterFragment = (): JSX.Element => {
  const { state: trainingState } = useAppSelector((store) => store.data.trainingState);

  return (
    <Fade in={trainingState !== 'started'}>
      <Box sx={styles.mainContainer}>
        <AppLink to={configuration.githubRepositoryUrl} target="_blank">
          <Box sx={styles.contentContainer}>
            <GithubIcon />
            <Typography sx={styles.versionLabel}>v1.0.0</Typography>
          </Box>
        </AppLink>
      </Box>
    </Fade>
  );
};

export default memo(FooterFragment);
