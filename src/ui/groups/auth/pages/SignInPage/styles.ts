import { SxProps, Theme } from '@mui/material';

interface Styles {
  mainContainer: SxProps;
  formContainer: SxProps;
  formElementsContainer: SxProps;
  fieldsContainer: SxProps;
  button: SxProps;
  linksContainer: SxProps;
  validationError: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const mainContainer: SxProps = {
    display: 'grid',
    gridTemplateColumns: '2fr minmax(10px, 3fr) 2fr',
    marginTop: '110px'
  };

  const formContainer: SxProps = {
    gridColumn: 2
  };

  const formElementsContainer: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px'
  };

  const fieldsContainer: SxProps = {
    display: 'flex',
    flexDirection: 'column'
  };

  const button: SxProps = {
    alignSelf: 'center',
    paddingLeft: '50px',
    paddingRight: '50px'
  };

  const linksContainer: SxProps = {
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

  const validationError: SxProps = {
    fontSize: '18px',
    color: theme.palette.error.main
  };

  return {
    mainContainer,
    formContainer,
    formElementsContainer,
    fieldsContainer,
    button,
    linksContainer,
    validationError
  };
};
