import { SxProps, Theme } from '@mui/material';

interface Styles {
  correctLetters: SxProps;
  incorrectLetters: SxProps;
  extraLetters: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const correctLetters: SxProps = {
    color: theme.palette.success.main
  };

  const incorrectLetters: SxProps = {
    color: theme.palette.error.main
  };

  const extraLetters: SxProps = {
    color: theme.palette.error.dark
  };

  return {
    correctLetters,
    incorrectLetters,
    extraLetters
  };
};
