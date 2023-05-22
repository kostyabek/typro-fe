import { useChannel, usePresence } from '@ably-labs/react-hooks';
import { Navigate, useParams } from 'react-router-dom';
import { Groups, MultiplayerPages, getLobbyChannelId } from '../../../../../utils';
import { multiplayerActions, useAppDispatch } from '../../../../../state';
import { LoaderElement } from '../../../../common';
import { AppPresenceData } from '../../../../../types';

export const JoinLobbyProcessingPage = (): JSX.Element => {
  const { lobbyId: passedLobbyId } = useParams() as { lobbyId: string };
  const channelId = getLobbyChannelId(passedLobbyId);
  const [presenceData] = usePresence<AppPresenceData>(channelId, {
    percentageOfCompleteness: 0,
    isCreator: false
  });
  const [channel] = useChannel(channelId, () => {});
  const dispatch = useAppDispatch();
  dispatch(
    multiplayerActions.setLobbyInfo({
      lobbyId: passedLobbyId,
      channelId: getLobbyChannelId(passedLobbyId)
    })
  );

  if (presenceData.length === 0) {
    return <LoaderElement />;
  }

  if (presenceData.length > 1) {
    return <Navigate to={`${Groups.Multiplayer}/${MultiplayerPages.Lobby}`} />;
  }

  channel.detach();
  dispatch(multiplayerActions.setLobbyAsNotActive());
  return <Navigate to={`${Groups.Multiplayer}`} />;
};
