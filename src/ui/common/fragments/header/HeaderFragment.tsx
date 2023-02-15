import { Box, Link as MuiLink, Typography } from '@mui/material';
import * as styles from './styles';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { ProfileIcon, SettingsIcon } from './icons';

interface Props {
  profileLink: string;
  settingsLink: string;
  multiplayerLink: string;
  leaderboardsLink: string;
  aboutLink: string;
}

export const HeaderFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <img src={logo} height="76" alt="LogoIcon" />
      <Box sx={styles.navigationContainer}>
        <Box sx={styles.iconLinksContainer}>
          <MuiLink component={Link} to={{ pathname: props.profileLink }}>
            <ProfileIcon />
          </MuiLink>
          <MuiLink component={Link} to={{ pathname: props.settingsLink }}>
            <SettingsIcon />
          </MuiLink>
        </Box>
        <Box sx={styles.textLinksContainer}>
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
    </Box>
  );
};
