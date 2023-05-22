import { AuthPages, Groups } from '../../../../utils';
import { HeaderFragment } from './HeaderFragment';

export const HeaderContainer = (): JSX.Element => {
  return (
    <HeaderFragment
      homeLink={Groups.Home}
      profileLink={Groups.Profile}
      settingsLink={Groups.Settings}
      multiplayerLink={Groups.Multiplayer}
      leaderboardsLink={Groups.Leaderboards}
      aboutLink={Groups.About}
      signOutLink={`${Groups.Auth}/${AuthPages.SignOut}`}
    />
  );
};
