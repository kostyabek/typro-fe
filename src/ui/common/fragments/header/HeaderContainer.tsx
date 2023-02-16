import { Groups } from '../../../../utils';
import { HeaderFragment } from './HeaderFragment';

export const HeaderContainer = (): JSX.Element => {
  return (
    <HeaderFragment
      profileLink={Groups.Profile}
      settingsLink="/"
      multiplayerLink="/"
      leaderboardsLink="/"
      aboutLink="/"
    />
  );
};
