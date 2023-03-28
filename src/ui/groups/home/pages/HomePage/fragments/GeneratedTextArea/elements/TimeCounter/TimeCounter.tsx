import { Typography } from '@mui/material';
import * as styles from './styles';

interface Props {
  secondsLeft: number;
  onSecondsLeftChange: (value: number) => void;
}

export const TimeCounter = (props: Props): JSX.Element => {
  return <Typography sx={styles.text}>{props.secondsLeft}</Typography>;
};
