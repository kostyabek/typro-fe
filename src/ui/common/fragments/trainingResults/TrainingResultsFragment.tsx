import { Box, Typography } from '@mui/material';
import { CharactersStats } from '../../../../types';
import * as styles from './styles';

interface Props {
  wordsPerMinute: number;
  accuracy: number;
  testType: string;
  characterStats: CharactersStats;
  timeInSeconds: number;
}

export const TrainingResultsFragment = (props: Props): JSX.Element => {
  return (
    <Box>
      <Typography>WPM: {props.wordsPerMinute.toFixed(2)}</Typography>
      <Typography>{`Accuracy: ${props.accuracy.toFixed(2)}%`}</Typography>
      <Typography>Test type: {props.testType}</Typography>
      <Box>
        <Typography component={'span'}>{`Characters: `}</Typography>
        <Typography
          component={'span'}
          sx={styles.correctLetters}>{`${props.characterStats.correct}`}</Typography>
        <Typography component={'span'}>/</Typography>
        <Typography
          component={'span'}
          sx={styles.incorrectLetters}>{`${props.characterStats.incorrect}`}</Typography>
        <Typography component={'span'}>/</Typography>
        <Typography
          component={'span'}
          sx={styles.extraLetters}>{`${props.characterStats.extra}`}</Typography>
        <Typography component={'span'}>/</Typography>
        <Typography component={'span'}>{`${props.characterStats.initial}`}</Typography>
      </Box>
      <Typography>{`Time: ${props.timeInSeconds.toFixed(2)}s`}</Typography>
    </Box>
  );
};
