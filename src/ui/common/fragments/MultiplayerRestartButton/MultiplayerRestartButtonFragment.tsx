import { Box } from '@mui/material';
import { memo } from 'react';
import { RestartIcon } from './icons';
import * as styles from './styles';
import { AppIconButton } from '../../elements';

interface Props {
  onRestartScheduled: () => void;
}

const MultiplayerRestartButtonFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.buttonContainer}>
      <AppIconButton onClick={props.onRestartScheduled}>
        <RestartIcon />
      </AppIconButton>
    </Box>
  );
};

export default memo(MultiplayerRestartButtonFragment);
