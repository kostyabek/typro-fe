import { SxProps, Theme } from '@mui/material';

interface Styles {
  text: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const text: SxProps = {
    color: theme.palette.success.main,
    fontSize: '28px',
    margin: '0 3px',
    position: 'absolute',
    top: '-35px'
  };

  return { text };
};
