import { useMediatorChannel } from '../../../../../hooks';
import { generateLobbyInfo } from '../../utils';
import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../state';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Groups, MultiplayerPages } from '../../../../../utils';

export const NewLobbyPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const multiplayerState = useAppSelector((store) => store.data.multiplayer);
  useEffect(() => {
    if (!multiplayerState.isActive) {
      const lobbyInfo = generateLobbyInfo();
      dispatch(multiplayerActions.setLobbyInfo(lobbyInfo));
      dispatch(multiplayerActions.setIsCreator(true));
    }
  }, []);

  const mediatorChannel = useMediatorChannel();
  mediatorChannel.publish('create-lobby', { channelName: multiplayerState.lobbyInfo.channelId });

  return <Navigate to={`${Groups.Multiplayer}/${MultiplayerPages.Lobby}`} />;
};
