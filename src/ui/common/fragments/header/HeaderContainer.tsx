import { HeaderFragment } from './HeaderFragment';

export const HeaderContainer = (): JSX.Element => {
  return (
    <HeaderFragment
      profileLink="/"
      settingsLink="/"
      multiplayerLink="/"
      leaderboardsLink="/"
      aboutLink="/"
    />
  );
};
