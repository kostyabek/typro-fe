import { Box } from '@mui/material';
import { AppLink, AppTextButton, AppToast } from '../../../../common';
import { Groups, MultiplayerPages } from '../../../../../utils';
import * as styles from './styles';

export const MultiplayerPage = (): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <AppLink
        to={`${Groups.Multiplayer}/${MultiplayerPages.NewLobby}`}
        sx={styles.leftButtonContainer}>
        <AppTextButton>Create lobby</AppTextButton>
      </AppLink>
      <AppLink
        to={`${Groups.Multiplayer}/${MultiplayerPages.JoinLobby}`}
        sx={styles.rightButtonContainer}>
        <AppTextButton>Join lobby</AppTextButton>
      </AppLink>
      <AppToast />
    </Box>
  );
};
