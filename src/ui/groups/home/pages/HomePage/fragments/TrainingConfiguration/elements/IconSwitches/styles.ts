import { SxProps } from '@mui/material';
import { colors } from '../../../../../../../../../shared';

export const iconsMainContainer: SxProps = {
  padding: '0 30px',
  display: 'flex',
  justifyContent: 'space-between'
};

export const iconsContainer: SxProps = {
  display: 'flex',
  columnGap: '75px'
};

export const modeLabel: SxProps = {
  textAlign: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  margin: '0 auto',
  width: '3rem',
  fontSize: '20px',
  color: colors.secondary.main
};

export const iconContainer: SxProps = {
  position: 'relative'
};
