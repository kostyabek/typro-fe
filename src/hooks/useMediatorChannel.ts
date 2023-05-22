import { useChannel } from '@ably-labs/react-hooks';
import { Types } from 'ably';

const mediatorChannelName = 'mediator';
export const useMediatorChannel = (): Types.RealtimeChannelCallbacks => {
  const [channel] = useChannel(mediatorChannelName, () => {});

  return channel;
};
