import { useChannel, usePresence } from '@ably-labs/react-hooks';
import { AppPresenceData, PlayerInfo } from '../../../../../../../types';
import { multiplayerActions, useAppDispatch, useAppSelector } from '../../../../../../../state';
import { LobbyFragment } from './LobbyFragment';
import { useEffect } from 'react';
import { ensure } from '../../../../../../../utils';

export const LobbyContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { lobbyInfo, isCreator, place, indicatorValue } = useAppSelector(
    (store) => store.data.multiplayer
  );
  const [presence, updatePresence] = usePresence<AppPresenceData>(lobbyInfo.channelId, {
    isCreator,
    indicatorValue,
    place
  });
  const [channel] = useChannel(lobbyInfo.channelId, 'restart-scheduled', () => {
    updatePresence({
      isCreator,
      indicatorValue: 0,
      place: 1
    });
  });

  useChannel(lobbyInfo.channelId, 'increment-place', (message) => {
    const myPresenceData = ensure(presence.find((e) => e.clientId === message.clientId)).data;
    const newPresenceData: AppPresenceData = {
      isCreator: myPresenceData.isCreator,
      indicatorValue: myPresenceData.indicatorValue,
      place: message.data.incrementedPlace
    };

    updatePresence(newPresenceData);
    dispatch(multiplayerActions.setPlace(newPresenceData.place));
  });

  useEffect(() => {
    dispatch(multiplayerActions.setUpdatePresenceMethod(updatePresence));
  }, []);

  const playersInfo = presence.map<PlayerInfo>((e) => {
    return {
      playerId: e.clientId,
      indicatorValue: e.data.indicatorValue,
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
      updatePresenceData={updatePresence}
      onStart={startHandler}
    />
  );
};
