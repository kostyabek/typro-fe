import { useChannel, usePresence } from '@ably-labs/react-hooks';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Groups, MultiplayerPages, getLobbyChannelId } from '../../../../../utils';
import { multiplayerActions, toastActions, useAppDispatch } from '../../../../../state';
import { LoaderElement } from '../../../../common';
import { AppPresenceData } from '../../../../../types';
import { trainingHttpClient } from '../../../../../httpClients';
import { useAxiosPrivate } from '../../../../../hooks';

export const JoinLobbyProcessingPage = (): JSX.Element => {
  const [lobbyExists, setLobbyExists] = useState(false);
  const { lobbyId: passedLobbyId } = useParams() as { lobbyId: string };
  const navigate = useNavigate();
  const channelId = getLobbyChannelId(passedLobbyId);
  const [presenceData] = usePresence<AppPresenceData>(channelId, {
    indicatorValue: 0,
    isCreator: false,
    place: 1
  });
  const [channel] = useChannel(channelId, () => {});
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useAppDispatch();

  const checkIfLobbyExists = async (): Promise<void> => {
    const exists = await trainingHttpClient.checkIfLobbyExists(axiosPrivate, passedLobbyId);
    if (!exists) {
      channel.detach();
      dispatch(multiplayerActions.setLobbyAsNotActive());
      dispatch(toastActions.setUpToast('Lobby does not exist!'));
      navigate(Groups.Multiplayer);
    } else {
      setLobbyExists(true);
    }
  };

  useEffect(() => {
    void checkIfLobbyExists();
  }, []);

  if (presenceData.length === 0 || !lobbyExists) {
    return <LoaderElement />;
  }

  dispatch(
    multiplayerActions.setLobbyInfo({
      lobbyId: passedLobbyId,
      channelId: getLobbyChannelId(passedLobbyId)
    })
  );

  return <Navigate to={`${Groups.Multiplayer}/${MultiplayerPages.Lobby}`} />;
};
