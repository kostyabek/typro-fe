import { Box } from '@mui/material';
import * as styles from './styles';
import { ReactNode } from 'react';

interface Props {
  words: ReactNode;
}

export const GeneratedTextAreaFragment = (props: Props): JSX.Element => {
  return <Box sx={styles.wordsContainer}>{props.words}</Box>;
};
