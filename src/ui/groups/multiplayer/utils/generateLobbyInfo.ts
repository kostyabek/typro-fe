import { v4 as uuidv4 } from 'uuid';
import { getLobbyChannelId } from '../../../../utils';
import { LobbyInfo } from '../../../../types';

export const generateLobbyInfo = (): LobbyInfo => {
  const lobbyId = uuidv4().replaceAll('-', '');
  return {
    lobbyId,
    channelId: getLobbyChannelId(lobbyId)
  };
};
