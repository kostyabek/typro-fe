import { useChannel } from '@ably-labs/react-hooks';
import { useEffect } from 'react';

import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../state';
import { useAxiosPrivate } from '../../../../../hooks';
import { trainingHttpClient } from '../../../../../httpClients';

import { LobbyContainer } from './fragments';

export const LobbyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const lobbyInfo = useAppSelector((store) => store.data.multiplayer.lobbyInfo);
  const [channel] = useChannel(lobbyInfo.channelId, () => 0);
  const axiosPrivate = useAxiosPrivate();

  const deleteLobbyInfo = async (): Promise<void> => {
    await trainingHttpClient.deleteLobbyInfo(axiosPrivate, lobbyInfo.lobbyId);
  };

  useEffect(() => () => {
      channel.presence.get(undefined, (_, messages) => {
        if (messages === undefined || messages.length === 1) {
          void deleteLobbyInfo();
        }
      });
      channel.detach();
      dispatch(multiplayerActions.setLobbyAsNotActive());
      dispatch(multiplayerActions.setIsCreator(false));
      dispatch(multiplayerActions.setIndicatorValue(0));
      dispatch(multiplayerActions.setPlace(1));
    });

  return <LobbyContainer />;
};
