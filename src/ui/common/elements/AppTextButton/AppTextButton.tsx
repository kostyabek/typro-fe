import { Button, ButtonProps } from '@mui/material';
import { colors } from '../../../../shared';

// TODO: Fix sx merging
export const AppTextButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      {...props}
      sx={{
        border: `4px solid ${colors.primary.main}`,
        borderRadius: '20px',
        '&:active': {
          backgroundColor: colors.primary.light
        },
        whiteSpace: 'nowrap',
        width: 'min-content',
        ...props.sx
      }}>
      {props.children}
    </Button>
  );
};
