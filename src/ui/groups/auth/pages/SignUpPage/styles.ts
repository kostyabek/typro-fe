import { SxProps, Theme } from '@mui/material';

interface Styles {
  mainContainer: SxProps;
  formContainer: SxProps;
  fieldsContainer: SxProps;
  button: SxProps;
  linksContainer: SxProps;
  validationError: SxProps;
  formElementsContainer: SxProps;
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
    justifyContent: 'center',
    '& a': {
      whiteSpace: 'nowrap'
    }
  };

  const validationError: SxProps = {
    fontSize: '18px',
    color: theme.palette.error.main
  };

  return {
    validationError,
    linksContainer,
    button,
    fieldsContainer,
    formElementsContainer,
    formContainer,
    mainContainer
  };
};
