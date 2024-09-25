import { Box } from '@mui/material';
import { ReactNode } from 'react';

import * as styles from './styles';

interface Props {
  words: ReactNode;
}

export const MultiplayerGeneratedTextAreaFragment = ({words}: Props): JSX.Element =>
  <Box sx={styles.wordsContainer}>{words}</Box>;
