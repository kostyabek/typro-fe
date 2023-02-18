import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  typography: {
    fontFamily: 'Mulish'
  },
  palette: colors,
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: 'initial',
          height: 'initial'
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
        disableUnderline: true
      },
      styleOverrides: {
        icon: {
          width: 20,
          height: 20,
          top: 'initial'
        },
        select: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.default,
          boxShadow: 'none',
          border: `2px solid ${colors.primary.main}`
        }
      }
    },
    MuiList: {
      defaultProps: {
        disablePadding: true
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          borderColor: colors.primary.main,
          borderRadius: '20px',
          '&:active': {
            transition: '0.1s',
            transform: 'scale(0.85)'
          }
        }
      }
    }
  }
});
