import { Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { createStyles } from './styles';

interface Props {
  secondsLeft: number;
  onSecondsLeftChange: (value: number) => void;
}

export const TimeCounter = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return <Typography sx={styles.text}>{props.secondsLeft}</Typography>;
};
