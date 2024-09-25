import { RouteObject } from 'react-router-dom';

import { Groups, MultiplayerPages } from '../../../utils';
import { Protected } from '../Protected';

import { JoinLobbyPage, JoinLobbyProcessingPage, LobbyPage, MultiplayerPage } from './pages';
import { NewLobbyPage } from './pages/NewLobbyPage';

export const MultiplayerRoutes: RouteObject[] = [
  {
    path: Groups.Multiplayer,
    children: [
      {
        element: (
          <Protected>
            <MultiplayerPage />
          </Protected>
        ),
        index: true
      },
      {
        element: (
          <Protected>
            <NewLobbyPage />
          </Protected>
        ),
        path: MultiplayerPages.NewLobby
      },
      {
        element: (
          <Protected>
            <LobbyPage />
          </Protected>
        ),
        path: MultiplayerPages.Lobby
      },
      {
        element: (
          <Protected>
            <JoinLobbyPage />
          </Protected>
        ),
        path: MultiplayerPages.JoinLobby
      },
      {
        element: (
          <Protected>
            <JoinLobbyProcessingPage />
          </Protected>
        ),
        path: MultiplayerPages.JoinLobbyProcessing
      }
    ]
  }
];
