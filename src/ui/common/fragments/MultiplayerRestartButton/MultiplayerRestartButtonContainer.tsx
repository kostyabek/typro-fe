import { useContext } from 'react';
import { useChannel } from '@ably-labs/react-hooks';

import { RestartContext } from '../../../../contexts';
import { useAppSelector } from '../../../../state';

import MultiplayerRestartButtonFragment from './MultiplayerRestartButtonFragment';

export const MultiplayerRestartButtonContainer = (): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  const lobbyInfo = useAppSelector((store) => store.data.multiplayer.lobbyInfo);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});

  const restartScheduledHandler = (): void => {
    channel.publish('restart-scheduled', {});
    setRestartScheduledStatus(true);
  };

  return <MultiplayerRestartButtonFragment onRestartScheduled={restartScheduledHandler} />;
};
