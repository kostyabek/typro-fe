import { Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { createStyles } from './styles';
import { useAppSelector } from '../../../../state';

interface Props {
  totalWords: number;
}

export const WordCounter = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const wordsTyped = useAppSelector((store) => store.ui.trainingState.wordsTyped);

  return (
    <Typography sx={styles.text}>
      {wordsTyped}/{props.totalWords}
    </Typography>
  );
};
