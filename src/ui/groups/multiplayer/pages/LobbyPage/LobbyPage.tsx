import { useChannel } from '@ably-labs/react-hooks';
import { LobbyContainer } from './fragments';
import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../state';
import { useEffect } from 'react';
import { useMediatorChannel } from '../../../../../hooks';

export const LobbyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const lobbyInfo = useAppSelector((store) => store.data.multiplayer.lobbyInfo);
  const nickname = useAppSelector((store) => store.data.user.info.nickname);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});
  const mediatorChannel = useMediatorChannel();
  mediatorChannel.publish('create-player-channel', {
    channelName: `${nickname}-${lobbyInfo.lobbyId}`
  });

  useEffect(() => {
    return () => {
      channel.detach();
      dispatch(multiplayerActions.setLobbyAsNotActive());
      dispatch(multiplayerActions.setIsCreatorStatus(false));
    };
  });

  return <LobbyContainer />;
};
