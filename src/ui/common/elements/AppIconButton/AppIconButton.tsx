import { Button, ButtonProps } from '@mui/material';
import { colors } from '../../../../shared';

export const AppIconButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      {...props}
      sx={{
        fontSize: '18px',
        borderColor: colors.primary.main,
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
