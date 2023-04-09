import { Button, ButtonProps, useTheme } from '@mui/material';

// TODO: Fix sx merging
export const AppTextButton = (props: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        border: `4px solid ${theme.palette.text.primary}`,
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        width: 'min-content',
        ...props.sx
      }}>
      {props.children}
    </Button>
  );
};
