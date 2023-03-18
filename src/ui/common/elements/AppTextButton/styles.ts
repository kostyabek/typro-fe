import { SxProps } from '@mui/material';
import { colors } from '../../../../shared';

export const button: SxProps = {
  border: `4px solid ${colors.primary.main}`,
  borderRadius: '20px',
  '&:active': {
    backgroundColor: colors.primary.light
  },
  whiteSpace: 'nowrap',
  width: 'min-content'
} as const;
