import { Box } from '@mui/material';
import * as styles from './styles';

interface Props {
  text: string;
}

export const GeneratedTextAreaFragment = (props: Props): JSX.Element => {
  return <Box sx={styles.text}>{props.text}</Box>;
};
