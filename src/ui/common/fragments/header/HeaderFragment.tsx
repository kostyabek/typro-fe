import { Box, Fade, Typography, useTheme } from '@mui/material';
import logoLight from './images/logo_light.png';
import logoDark from './images/logo_dark.png';
import { ProfileIcon, SettingsIcon } from './icons';
import { AppLink } from '../../elements';
import { useAppSelector } from '../../../../state';
import { useMemo } from 'react';
import { createStyles } from './styles';

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
  const themeMode = useAppSelector((store) => store.ui.theme.mode);
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Box sx={styles.mainContainer}>
      <AppLink to={props.homeLink}>
        <img src={themeMode === 'light' ? logoLight : logoDark} height="76" alt="LogoIcon" />
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
