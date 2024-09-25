import { createTheme, PaletteMode, Theme } from '@mui/material';

import { darkColors, lightColors } from './colors';

export const createMuiTheme = (mode: PaletteMode): Theme => {
  let theme = createTheme({
    typography: {
      fontFamily: 'Mulish',
      fontSize: 18
    },
    palette: mode === 'light' ? lightColors : darkColors,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1040,
        lg: 1200,
        xl: 1536
      }
    }
  });

  theme = createTheme(theme, {
    components: {
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
            backgroundColor: theme.palette.background.default,
            boxShadow: 'none',
            border: `2px solid ${theme.palette.text.primary}`
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
            textTransform: 'initial',
            width: 'initial'
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            width: 'initial'
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: '18px',
            color: theme.palette.text.primary
          }
        }
      }
    }
  });

  return theme;
};
