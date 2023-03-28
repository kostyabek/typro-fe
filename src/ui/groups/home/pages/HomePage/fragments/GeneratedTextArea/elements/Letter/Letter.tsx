import { SxProps, Typography } from '@mui/material';
import { LetterStatus } from '../../../../../../../../../types';
import * as styles from './styles';

export interface LetterProps {
  position: number;
  character: string;
  status: LetterStatus;
}

export const Letter = (props: LetterProps): JSX.Element => {
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
