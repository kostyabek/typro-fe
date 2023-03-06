import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { HeaderContainer } from '../header';
import * as styles from './styles';

export const RootLayout = (): JSX.Element => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentContainer}>
        <HeaderContainer />
        <Outlet />
      </Box>
    </Box>
  );
};
