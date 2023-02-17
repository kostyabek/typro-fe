import { Box, Button } from '@mui/material';
import { RestartIcon } from './icons';
import * as styles from './styles';

export const RestartButtonFragment = (): JSX.Element => {
  return (
    <Box sx={styles.buttonContainer}>
      <Button>
        <RestartIcon />
      </Button>
    </Box>
  );
};
