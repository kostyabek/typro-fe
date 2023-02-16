import { Box } from '@mui/material';
import { NumbersIcon, PunctuationIcon, TimeModeIcon, WordsModeIcon } from './icons';
import * as styles from './styles';

export const IconSwitchesElement = (): JSX.Element => {
  return (
    <Box sx={styles.iconsMainContainer}>
      <Box sx={styles.iconsContainer}>
        <PunctuationIcon />
        <NumbersIcon />
      </Box>
      <Box sx={styles.iconsContainer}>
        <WordsModeIcon />
        <TimeModeIcon />
      </Box>
    </Box>
  );
};
