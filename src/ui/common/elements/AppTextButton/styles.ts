import { SxProps, Theme } from '@mui/material';

interface Styles {
  button: SxProps;
}

export const createStyles = (theme: Theme): Styles => {
  const button: SxProps = {
    border: `4px solid ${theme.palette.text.primary}`,
    borderRadius: '20px',
    '&:active': {
      backgroundColor: theme.palette.text.primary
    },
    whiteSpace: 'nowrap',
    width: 'min-content'
  } as const;

  return { button };
};
