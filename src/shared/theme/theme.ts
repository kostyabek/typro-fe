import { createTheme } from '@mui/material';
import { colors } from './colors';

export const theme = createTheme({
  typography: {
    fontFamily: 'Mulish',
    fontSize: 18
  },
  palette: colors,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 930,
      lg: 1200,
      xl: 1536
    }
  },
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
          textTransform: 'initial'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          color: colors.primary.main
        }
      }
    }
  }
});
