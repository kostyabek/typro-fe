import { Box } from '@mui/material';
import { memo, useContext } from 'react';

import { RestartContext } from '../../../../contexts';
import { AppIconButton } from '../../elements';

import { RestartIcon } from './icons';
import * as styles from './styles';

const RestartButtonFragment = (): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  return (
    <Box sx={styles.buttonContainer}>
      <AppIconButton onClick={() => setRestartScheduledStatus(true)}>
        <RestartIcon />
      </AppIconButton>
    </Box>
  );
};

export default memo(RestartButtonFragment);
