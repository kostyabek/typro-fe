import { Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { useAppSelector } from '../../../../state';

import { createStyles } from './styles';

interface Props {
  totalWords: number;
}

export const WordCounter = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const wordsTyped = useAppSelector((store) => store.data.trainingState.wordsTyped);

  return (
    <Typography sx={styles.text}>
      {wordsTyped}/{props.totalWords}
    </Typography>
  );
};
