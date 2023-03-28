import { Typography } from '@mui/material';
import * as styles from './styles';

interface Props {
  wordsTyped: number;
  totalWords: number;
}

export const WordCounter = (props: Props): JSX.Element => {
  return (
    <Typography sx={styles.text}>
      {props.wordsTyped}/{props.totalWords}
    </Typography>
  );
};
