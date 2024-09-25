import { SxProps, Theme } from '@mui/material';

interface Styles {
  scrollOverrideContainer: SxProps;
}

export const createStyles = (theme: Theme): Styles => ({
    scrollOverrideContainer: {
      '*': {
        '::-webkit-scrollbar': {
          height: '7px',
          width: '7px'
        },
        /* Track */
        '::-webkit-scrollbar-track': {
          background: 'transparent'
        },

        /* Handle */
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.text.secondary,
          borderRadius: '15px'
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.palette.text.primary
        }
      }
    }
  });
