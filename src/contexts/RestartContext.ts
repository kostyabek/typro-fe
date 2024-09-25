import { createContext } from 'react';

export const RestartContext = createContext({
  isRestartScheduled: false,
  setRestartScheduledStatus: (status: boolean) => 0
});
