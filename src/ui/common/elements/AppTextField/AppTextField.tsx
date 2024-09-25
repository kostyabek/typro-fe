import { TextField, TextFieldProps, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { createStyles } from './styles';

export const AppTextField = (props: TextFieldProps): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TextField {...props} sx={styles.textField}>
      {props.children}
    </TextField>
  );
};
