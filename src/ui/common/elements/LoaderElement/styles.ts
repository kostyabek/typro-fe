import { SxProps, Theme } from '@mui/material';

interface Styles {
  container: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const container: SxProps = {
    color: theme.palette.text.primary
  };

  return { container };
};
