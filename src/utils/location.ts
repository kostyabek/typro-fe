export const enum Groups {
  Root = '/',
  Home = '/',
  Auth = '/auth',
  Profile = '/profile',
  Settings = '/settings',
  Multiplayer = '/multiplayer',
  Leaderboards = '/leaderboards',
  About = '/about',
  TrainingResults = '/training-results'
}

export const enum AuthPages {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  SignOut = 'sign-out',
  ForgotPassword = 'forgot-password'
}

export const enum MultiplayerPages {
  NewLobby = 'new-lobby',
  JoinLobby = 'existing-lobby',
  JoinLobbyProcessing = 'lobby/:lobbyId',
  Lobby = 'lobby'
}
