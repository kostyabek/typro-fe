import { Box } from '@mui/material';
import { AppLink, AppTextButton } from '../../../../common';
import { Groups, MultiplayerPages } from '../../../../../utils';

export const MultiplayerPage = (): JSX.Element => {
  return (
    <Box>
      <AppLink to={`${Groups.Multiplayer}/${MultiplayerPages.NewLobby}`}>
        <AppTextButton>Create lobby</AppTextButton>
      </AppLink>
      <AppLink to={`${Groups.Multiplayer}/${MultiplayerPages.JoinLobby}`}>
        <AppTextButton>Join lobby</AppTextButton>
      </AppLink>
    </Box>
  );
};
