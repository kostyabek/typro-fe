import { Box, Link as MuiLink, Typography } from '@mui/material';
import * as styles from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

interface Props {
  multiplayerLink: string;
  leaderboardsLink: string;
  aboutLink: string;
}

export const HeaderFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <img src={logo} height="76" />
      <Box sx={styles.linksContainer}>
        <MuiLink
          sx={styles.noTextDecoration}
          component={Link}
          to={{ pathname: props.multiplayerLink }}>
          <Typography sx={styles.link}>Multiplayer</Typography>
        </MuiLink>
        <MuiLink
          sx={styles.noTextDecoration}
          component={Link}
          to={{ pathname: props.leaderboardsLink }}>
          <Typography sx={styles.link}>Leaderboards</Typography>
        </MuiLink>
        <MuiLink sx={styles.noTextDecoration} component={Link} to={{ pathname: props.aboutLink }}>
          <Typography sx={styles.link}>About</Typography>
        </MuiLink>
      </Box>
    </Box>
  );
};
