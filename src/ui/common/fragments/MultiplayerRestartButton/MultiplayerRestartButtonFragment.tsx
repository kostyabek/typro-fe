import { Box } from '@mui/material';
import { memo } from 'react';

import { AppIconButton } from '../../elements';

import { RestartIcon } from './icons';
import * as styles from './styles';

interface Props {
  onRestartScheduled: () => void;
}

const MultiplayerRestartButtonFragment = (props: Props): JSX.Element => (
    <Box sx={styles.buttonContainer}>
      <AppIconButton onClick={props.onRestartScheduled}>
        <RestartIcon />
      </AppIconButton>
    </Box>
  );

export default memo(MultiplayerRestartButtonFragment);
