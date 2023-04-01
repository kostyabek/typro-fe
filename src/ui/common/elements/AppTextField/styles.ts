import { SxProps, Theme } from '@mui/material';

interface Styles {
  textField: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const textField: SxProps = {
    '& fieldset': {
      border: `2px solid ${theme.palette.text.primary}`,
      borderRadius: '20px'
    },
    '&.Mui-focused': { border: `2px solid ${theme.palette.secondary.main}` },
    transition: '1s',
    fontSize: '18px'
  };

  return { textField };
};
