import { configureAbly } from '@ably-labs/react-hooks';

export const useAbly = (clientId: string): void => {
  configureAbly({
    key: '1lfR_w.jkOnEA:kUz7o3QkzDgIp7u2JLHrOQ0WcB5T_Pxio8SmjiQ3_Gg',
    clientId
  });
};
