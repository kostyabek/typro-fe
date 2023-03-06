import { SxProps } from '@mui/material';
import { colors } from '../../../../shared';

export const textField: SxProps = {
  border: `2px solid ${colors.primary.main}`,
  borderRadius: '20px',
  '&:hover fieldset': { border: 'none' },
  '& fieldset': { border: 'none' },
  '&.Mui-focused': { border: `2px solid ${colors.secondary.main}` },
  transition: '1s',
  fontSize: '18px'
};
