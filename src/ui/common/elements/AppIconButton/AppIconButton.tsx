import { Button, ButtonProps, useTheme } from '@mui/material';

export const AppIconButton = (props: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        fontSize: '18px',
        borderColor: theme.palette.text.primary,
        borderRadius: '20px',
        '&:active': {
          transition: '0.1s',
          transform: 'scale(0.85)'
        },
        ...props.sx
      }}>
      {props.children}
    </Button>
  );
};
