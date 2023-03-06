import { TextField, TextFieldProps } from '@mui/material';
import * as styles from './styles';

export const AppTextField = (props: TextFieldProps): JSX.Element => {
  return (
    <TextField {...props} sx={styles.textField}>
      {props.children}
    </TextField>
  );
};
