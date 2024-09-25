import { Box } from '@mui/material';

import { StatsByModeContainer, TrainingStatsChartContainer, UserInfoContainer } from './fragments';
import * as styles from './styles';

export const ProfilePage = (): JSX.Element => (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.centeredContainer}>
        <UserInfoContainer />
        <StatsByModeContainer />
        <TrainingStatsChartContainer />
      </Box>
    </Box>
  );
