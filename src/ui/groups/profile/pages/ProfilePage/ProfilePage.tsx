import { Box } from '@mui/material';
import { StatsByModeContainer, UserInfoContainer } from './fragments';
import * as styles from './styles';
import { useAuthGuard } from '../../../../../hooks';

export const ProfilePage = (): JSX.Element => {
  const content = (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.centeredContainer}>
        <UserInfoContainer />
        <StatsByModeContainer />
      </Box>
    </Box>
  );

  return useAuthGuard(content);
};
