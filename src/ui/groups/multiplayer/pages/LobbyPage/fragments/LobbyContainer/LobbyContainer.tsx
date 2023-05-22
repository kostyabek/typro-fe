import { useChannel, usePresence } from '@ably-labs/react-hooks';
import { AppPresenceData, PlayerInfo } from '../../../../../../../types';
import { useAppSelector } from '../../../../../../../state';
import { LobbyFragment } from './LobbyFragment';

export const LobbyContainer = (): JSX.Element => {
  const { lobbyInfo, isCreator } = useAppSelector((store) => store.data.multiplayer);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});
  const [presenceData, updatePresenceData] = usePresence<AppPresenceData>(lobbyInfo.channelId, {
    percentageOfCompleteness: 0,
    isCreator
  });

  const playersInfo = presenceData.map<PlayerInfo>((e) => {
    return {
      playerId: e.clientId,
      percentageOfCompleteness: e.data.percentageOfCompleteness,
      isCreator: e.data.isCreator
    };
  });

  const startHandler = (): void => {
    channel.publish('start-training', { started: true });
  };

  return (
    <LobbyFragment
      isCreator={isCreator}
      lobbyId={lobbyInfo.lobbyId}
      playersInfo={playersInfo}
      updatePresenceData={updatePresenceData}
      onStart={startHandler}
    />
  );
};
