import { useChannel, usePresence } from '@ably-labs/react-hooks';
import { AppPresenceData, PlayerInfo } from '../../../../../../../types';
import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../../../state';
import { LobbyFragment } from './LobbyFragment';
import { useEffect } from 'react';

export const LobbyContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { lobbyInfo, isCreator, percentageOfCompleteness, place } = useAppSelector(
    (store) => store.data.multiplayer
  );
  const [presenceData, updatePresenceData] = usePresence<AppPresenceData>(lobbyInfo.channelId, {
    isCreator,
    percentageOfCompleteness,
    place
  });
  const [channel] = useChannel(lobbyInfo.channelId, 'restart-scheduled', () => {
    updatePresenceData({
      isCreator,
      percentageOfCompleteness: 0,
      place: 1
    });
  });

  useChannel(lobbyInfo.channelId, 'increment-place', (message) => {
    const newPresenceData: AppPresenceData = {
      isCreator,
      percentageOfCompleteness,
      place: message.data.incrementedPlace
    };

    updatePresenceData(newPresenceData);
    dispatch(multiplayerActions.setPlace(newPresenceData.place));
  });

  useEffect(() => {
    dispatch(multiplayerActions.setUpdatePresenceMethod(updatePresenceData));
  }, []);

  const playersInfo = presenceData.map<PlayerInfo>((e) => {
    return {
      playerId: e.clientId,
      percentageOfCompleteness: e.data.percentageOfCompleteness,
      isCreator: e.data.isCreator,
      place: e.data.place
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
