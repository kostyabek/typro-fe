import { Box } from '@mui/material';
import {
  GeneratedTextAreaContainer,
  RestartButtonContainer,
  TrainingConfigurationContainer
} from './fragments';
import * as styles from './styles';

export const HomePage = (): JSX.Element => {
  return (
    <Box sx={styles.layoutContainer}>
      <Box sx={styles.contentContainer}>
        <TrainingConfigurationContainer />
        <GeneratedTextAreaContainer />
        <RestartButtonContainer />
      </Box>
    </Box>
  );
};
