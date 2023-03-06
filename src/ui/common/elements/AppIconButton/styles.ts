import { SxProps } from '@mui/material';
import { colors } from '../../../../shared';

export const button: SxProps = {
  fontSize: '18px',
  borderColor: colors.primary.main,
  borderRadius: '20px',
  '&:active': {
    transition: '0.1s',
    transform: 'scale(0.85)'
  }
};
