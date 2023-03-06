import { SxProps } from '@mui/material';
import { colors, theme } from '../../../../shared';

const container: SxProps = {
  display: 'flex'
};

export const mainContainer: SxProps = {
  ...container,
  alignItems: 'center',
  columnGap: '15px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
};

export const navigationContainer: SxProps = {
  ...container,
  justifyContent: 'space-between',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    flexDirection: 'column'
  }
};

export const iconLinksContainer: SxProps = {
  ...container,
  columnGap: '15px',
  alignItems: 'center'
};

export const textLinksContainer: SxProps = {
  ...container,
  columnGap: '125px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
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
