import { SxProps } from '@mui/material';
import { colors } from '../../../../shared/theme';

const container: SxProps = {
  display: 'flex'
};

export const mainContainer: SxProps = {
  ...container,
  alignItems: 'center',
  columnGap: '15px'
};

export const navigationContainer: SxProps = {
  ...container,
  justifyContent: 'space-between',
  flex: 1
};

export const iconLinksContainer: SxProps = {
  display: 'flex',
  columnGap: '15px',
  alignItems: 'center'
};

export const textLinksContainer: SxProps = {
  display: 'flex',
  columnGap: '125px'
};

export const noTextDecoration: SxProps = {
  textDecoration: 'none'
};

export const link: SxProps = {
  fontSize: '24px',
  '&:after': {
    display: 'block',
    content: '""',
    borderBottom: `1px solid ${colors.primary.main}`,
    transform: 'scaleX(0)',
    transition: 'transform 200ms ease-in-out'
  },
  '&:hover:after': {
    transform: 'scaleX(1)'
  }
};
