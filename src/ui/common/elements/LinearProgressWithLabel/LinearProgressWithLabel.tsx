import { LinearProgressProps, Box, Typography, LinearProgress } from '@mui/material';
import * as styles from './styles';

type Props = LinearProgressProps & { value: number };

export const LinearProgressWithLabel = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.progressContainer}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={styles.labelContainer}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
