import { Box, Fade, Typography } from '@mui/material';
import * as styles from './styles';
import logo from './images/logo.png';
import { ProfileIcon, SettingsIcon } from './icons';
import { AppLink } from '../../elements';
import { useAppSelector } from '../../../../state';

interface Props {
  homeLink: string;
  profileLink: string;
  settingsLink: string;
  multiplayerLink: string;
  leaderboardsLink: string;
  aboutLink: string;
}

export const HeaderFragment = (props: Props): JSX.Element => {
  const { state: trainingState } = useAppSelector((store) => store.ui.trainingState);

  return (
    <Box sx={styles.mainContainer}>
      <AppLink to={props.homeLink}>
        <img src={logo} height="76" alt="LogoIcon" />
      </AppLink>
      <Fade in={trainingState !== 'started'}>
        <Box sx={styles.navigationContainer}>
          <Box sx={styles.iconLinksContainer}>
            <AppLink to={props.profileLink}>
              <ProfileIcon />
            </AppLink>
            <AppLink to={props.settingsLink}>
              <SettingsIcon />
            </AppLink>
          </Box>
          <Box sx={styles.textLinksContainer}>
            <AppLink to={props.multiplayerLink}>
              <Typography sx={styles.link}>Multiplayer</Typography>
            </AppLink>
            <AppLink to={props.leaderboardsLink}>
              <Typography sx={styles.link}>Leaderboards</Typography>
            </AppLink>
            <AppLink to={props.aboutLink}>
              <Typography sx={styles.link}>About</Typography>
            </AppLink>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};
