import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

import { AppTextButton, AppTextField } from '../../../../common';

import * as styles from './styles';

export const JoinLobbyPage = (): JSX.Element => {
  const [lobbyId, setLobbyId] = useState('');
  const navigate = useNavigate();
  const joinLobbyHandler = (): void => {
    navigate({ pathname: `../lobby/${lobbyId}` });
  };

  const lobbyIdChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLobbyId(event.currentTarget.value);
  };

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.contentContainer}>
        <AppTextField onChange={lobbyIdChangeHandler} placeholder="Invite code" />
        <AppTextButton onClick={joinLobbyHandler}>Join lobby</AppTextButton>
      </Box>
    </Box>
  );
};
