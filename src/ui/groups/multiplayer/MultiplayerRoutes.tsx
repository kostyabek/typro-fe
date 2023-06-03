import { RouteObject } from 'react-router-dom';
import { Groups, MultiplayerPages } from '../../../utils';
import { JoinLobbyPage, JoinLobbyProcessingPage, LobbyPage, MultiplayerPage } from './pages';
import { NewLobbyPage } from './pages/NewLobbyPage';

export const MultiplayerRoutes: RouteObject[] = [
  {
    path: Groups.Multiplayer,
    children: [
      { element: <MultiplayerPage />, index: true },
      { element: <NewLobbyPage />, path: MultiplayerPages.NewLobby },
      { element: <LobbyPage />, path: MultiplayerPages.Lobby },
      { element: <JoinLobbyPage />, path: MultiplayerPages.JoinLobby },
      { element: <JoinLobbyProcessingPage />, path: MultiplayerPages.JoinLobbyProcessing }
    ]
  }
];
