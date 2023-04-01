import { Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { createStyles } from './styles';

interface Props {
  wordsTyped: number;
  totalWords: number;
}

export const WordCounter = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Typography sx={styles.text}>
      {props.wordsTyped}/{props.totalWords}
    </Typography>
  );
};
