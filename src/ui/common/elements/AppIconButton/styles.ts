import { SxProps, Theme } from '@mui/material';

interface Styles {
  button: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const button: SxProps = {
    fontSize: '18px',
    borderColor: theme.palette.text.primary,
    borderRadius: '20px',
    '&:active': {
      transition: '0.1s',
      transform: 'scale(0.85)'
    }
  };

  return { button };
};
