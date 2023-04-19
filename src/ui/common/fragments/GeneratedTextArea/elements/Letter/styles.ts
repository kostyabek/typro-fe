import { SxProps, Theme } from '@mui/material';

interface Styles {
  initial: SxProps;
  correct: SxProps;
  incorrect: SxProps;
  extra: SxProps;
}

const base: SxProps = {
  fontSize: '28px'
};

export const createStyles = (theme: Theme): Styles => {
  const initial: SxProps = {
    ...base,
    color: theme.palette.text.secondary
  };

  const correct: SxProps = {
    ...base,
    color: theme.palette.text.primary
  };

  const incorrect: SxProps = {
    ...base,
    color: theme.palette.error.main
  };

  const extra: SxProps = {
    ...base,
    color: theme.palette.error.dark
  };

  return {
    initial,
    correct,
    incorrect,
    extra
  };
};
