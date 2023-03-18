import { SxProps } from '@mui/material';
import { colors } from '../../../../shared';

export const textField: SxProps = {
  '& fieldset': {
    border: `2px solid ${colors.primary.main}`,
    borderRadius: '20px'
  },
  '&.Mui-focused': { border: `2px solid ${colors.secondary.main}` },
  transition: '1s',
  fontSize: '18px'
};
