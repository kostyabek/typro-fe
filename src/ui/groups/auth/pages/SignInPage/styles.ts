import { SxProps } from '@mui/material';
import { theme } from '../../../../../shared';

export const mainContainer: SxProps = {
  display: 'grid',
  gridTemplateColumns: '2fr minmax(10px, 3fr) 2fr',
  marginTop: '110px'
};

export const formContainer: SxProps = {
  gridColumn: 2
};

export const formElementsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px'
};

export const fieldsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column'
};

export const button: SxProps = {
  alignSelf: 'center',
  paddingLeft: '50px',
  paddingRight: '50px'
};

export const linksContainer: SxProps = {
  display: 'flex',
  justifyContent: 'space-around',
  '& a': {
    whiteSpace: 'nowrap'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '15px'
  }
};
