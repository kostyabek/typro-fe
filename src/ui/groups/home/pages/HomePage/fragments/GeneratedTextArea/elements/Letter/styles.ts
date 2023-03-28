import { SxProps } from '@mui/material';
import { colors } from '../../../../../../../../../shared';

export const initial: SxProps = {
  fontSize: '28px'
};

export const correct: SxProps = {
  ...initial,
  color: colors.success.main
};

export const incorrect: SxProps = {
  ...initial,
  color: colors.error.main
};

export const extra: SxProps = {
  ...initial,
  color: colors.error.dark
};
