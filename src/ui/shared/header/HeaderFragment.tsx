import { Box, Typography } from '@mui/material';
import * as styles from './styles';
import logo from '../../assets/logo.png';

export const HeaderFragment = (): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <img src={logo} height="76" />
      <Box sx={styles.linksContainer}>
        <Typography sx={styles.link}>Multiplayer</Typography>
        <Typography sx={styles.link}>Leaderboards</Typography>
        <Typography sx={styles.link}>About</Typography>
      </Box>
    </Box>
  );
};
