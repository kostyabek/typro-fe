import { Box, Typography } from '@mui/material';

import * as styles from './styles';

const precision = 2;
interface Props {
  mode: string;
  wordsPerMinute?: number;
  accuracy?: number;
}

export const ModeInfoElement = (props: Props): JSX.Element => (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.modeLabel}>{props.mode}</Typography>
      <Typography sx={styles.wordsPerMinuteLabel}>
        {props.wordsPerMinute?.toFixed(precision) ?? '-'}
      </Typography>
      <Typography sx={styles.accuracyLabel}>
        {props.accuracy === null || props.accuracy === undefined
          ? '-'
          : `${props.accuracy.toFixed(precision)}%`}
      </Typography>
    </Box>
  );
