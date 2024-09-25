import { SxProps, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';

import { LetterStatus } from '../../../../../../types';

import { createStyles } from './styles';

export interface LetterProps {
  position: number;
  character: string;
  status: LetterStatus;
}

export const Letter = (props: LetterProps): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const getStylesBasedOnState = (): SxProps => {
    if (props.status === 'correct') {
      return styles.correct;
    }
    if (props.status === 'incorrect') {
      return styles.incorrect;
    }
    if (props.status === 'extra') {
      return styles.extra;
    }
    return styles.initial;
  };

  return <Typography sx={{ ...getStylesBasedOnState() }}>{props.character}</Typography>;
};
