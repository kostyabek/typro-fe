import { Box } from '@mui/material';
import { HeaderContainer, RouterComponent } from './common';
import * as styles from './styles';

export const App = (): JSX.Element => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentContainer}>
        <HeaderContainer />
        <RouterComponent />
      </Box>
    </Box>
  );
};
