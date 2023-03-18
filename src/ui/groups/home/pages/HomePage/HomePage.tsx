import { Box } from '@mui/material';
import { useState } from 'react';
import { RestartContext } from '../../../../../contexts';
import {
  GeneratedTextAreaContainer,
  RestartButtonContainer,
  TrainingConfigurationContainer
} from './fragments';
import * as styles from './styles';

export const HomePage = (): JSX.Element => {
  const [isRestartScheduled, setRestartScheduledStatus] = useState(true);

  return (
    <RestartContext.Provider value={{ isRestartScheduled, setRestartScheduledStatus }}>
      <Box sx={styles.layoutContainer}>
        <Box sx={styles.contentContainer}>
          <TrainingConfigurationContainer />
          <GeneratedTextAreaContainer />
          <RestartButtonContainer />
        </Box>
      </Box>
    </RestartContext.Provider>
  );
};
