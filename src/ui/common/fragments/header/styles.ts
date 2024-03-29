import { SxProps, Theme } from '@mui/material';

const container: SxProps = {
  display: 'flex'
};

interface Styles {
  mainContainer: SxProps;
  navigationContainer: SxProps;
  iconLinksContainer: SxProps;
  textLinksContainer: SxProps;
  mainLink: SxProps;
  signOutLink: SxProps;
  iconLink: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const mainContainer: SxProps = {
    ...container,
    alignItems: 'center',
    columnGap: '15px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  };

  const navigationContainer: SxProps = {
    ...container,
    justifyContent: 'space-between',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      flexDirection: 'column'
    }
  };

  const iconLinksContainer: SxProps = {
    ...container,
    columnGap: '15px',
    alignItems: 'center'
  };

  const textLinksContainer: SxProps = {
    ...container,
    columnGap: '125px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };

  const mainLink: SxProps = {
    fontSize: '24px',
    '&:after': {
      display: 'block',
      content: '""',
      borderBottom: `1px solid ${theme.palette.text.primary}`,
      transform: 'scaleX(0)',
      transition: 'transform 200ms ease-in-out'
    },
    '&:hover:after': {
      transform: 'scaleX(1)'
    }
  };

  const signOutLink: SxProps = {
    fontSize: '18px'
  };

  const iconLink: SxProps = {
    display: 'flex',
    alignItems: 'center'
  };

  return {
    mainContainer,
    navigationContainer,
    iconLinksContainer,
    textLinksContainer,
    mainLink,
    signOutLink,
    iconLink
  };
};
