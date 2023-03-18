import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import * as styles from './styles';

export const RootLayout = (): JSX.Element => {
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.centeredContainer}>
        <HeaderContainer />
        <Outlet />
        <FooterContainer />
      </Box>
    </Box>
  );
};
