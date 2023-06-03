import { SxProps, Theme } from '@mui/material';

interface Styles {
  iconsMainContainer: SxProps;
  iconsContainer: SxProps;
  modeLabel: SxProps;
  iconContainer: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const iconsMainContainer: SxProps = {
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const iconsContainer: SxProps = {
    display: 'flex',
    columnGap: '75px'
  };

  const modeLabel: SxProps = {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto',
    width: '3rem',
    fontSize: '20px',
    color: theme.palette.secondary.main
  };

  const iconContainer: SxProps = {
    position: 'relative'
  };

  return {
    iconsMainContainer,
    iconsContainer,
    modeLabel,
    iconContainer
  };
};
