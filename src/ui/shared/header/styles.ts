import { SxProps } from '@mui/material';
import { colors } from '../../../shared/theme';

const container: SxProps = {
  display: 'flex',
  justifyContent: 'space-between'
};

export const mainContainer: SxProps = {
  ...container,
  alignItems: 'center'
};

export const linksContainer: SxProps = {
  ...container,
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
