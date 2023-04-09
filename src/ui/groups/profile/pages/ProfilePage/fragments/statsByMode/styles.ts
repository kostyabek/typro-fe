import { SxProps, Theme } from '@mui/material';

interface Styles {
  mainContainer: SxProps;
  divider: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const mainContainer: SxProps = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const divider: SxProps = {
    border: `1px solid ${theme.palette.primary.main}`
  };

  return { mainContainer, divider };
};
