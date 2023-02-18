import { Groups } from '../../../../utils';
import { HeaderFragment } from './HeaderFragment';

export const HeaderContainer = (): JSX.Element => {
  return (
    <HeaderFragment
      homeLink={Groups.Home}
      profileLink={Groups.Profile}
      settingsLink="/"
      multiplayerLink="/"
      leaderboardsLink="/"
      aboutLink="/"
    />
  );
};
