import { Box } from '@mui/material';
import { AppIconButton } from '../../../../../../common';
import { RestartIcon } from './icons';
import * as styles from './styles';

export const RestartButtonFragment = (): JSX.Element => {
  return (
    <Box sx={styles.buttonContainer}>
      <AppIconButton>
        <RestartIcon />
      </AppIconButton>
    </Box>
  );
};
