import { Box } from '@mui/material';
import { AppTextButton, AppTextField } from '../../../../common';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

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
    <Box>
      <AppTextField onChange={lobbyIdChangeHandler} placeholder="Invite code" />
      <AppTextButton onClick={joinLobbyHandler}>Join lobby</AppTextButton>
    </Box>
  );
};
