import { SxProps } from '@mui/material';
import { colors } from '../../../../shared';

export const correctLetters: SxProps = {
  color: colors.success.main
};

export const incorrectLetters: SxProps = {
  color: colors.error.main
};

export const extraLetters: SxProps = {
  color: colors.error.dark
};
