import { useChannel } from '@ably-labs/react-hooks';
import { LobbyContainer } from './fragments';
import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../state';
import { useEffect } from 'react';
import { useAxiosPrivate } from '../../../../../hooks';
import { trainingHttpClient } from '../../../../../httpClients';

export const LobbyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const lobbyInfo = useAppSelector((store) => store.data.multiplayer.lobbyInfo);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});
  const axiosPrivate = useAxiosPrivate();

  const deleteLobbyInfo = async (): Promise<void> => {
    await trainingHttpClient.deleteLobbyInfo(axiosPrivate, lobbyInfo.lobbyId);
  };

  useEffect(() => {
    return () => {
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
    };
  });

  return <LobbyContainer />;
};
