import { Box, Typography } from '@mui/material';
import * as styles from './styles';

interface Props {
  mode: string;
  wordsPerMinute?: number;
  accuracy?: number;
}

export const ModeInfoElement = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.modeLabel}>{props.mode}</Typography>
      <Typography sx={styles.wordsPerMinuteLabel}>
        {props.wordsPerMinute?.toFixed(2) ?? '-'}
      </Typography>
      <Typography sx={styles.accuracyLabel}>
        {props.accuracy === null || props.accuracy === undefined
          ? '-'
          : `${props.accuracy.toFixed(2)}%`}
      </Typography>
    </Box>
  );
};
