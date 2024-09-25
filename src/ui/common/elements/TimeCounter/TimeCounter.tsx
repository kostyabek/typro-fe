import { Typography, useTheme } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useAppSelector } from '../../../../state';

import { createStyles } from './styles';

interface Props {
  onTimesUp: () => void;
}

export const TimeCounter = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const initialTimeInSeconds = useAppSelector((store) => store.data.trainingConfiguration.timeMode);
  const [secondsLeft, setSecondsLeft] = useState(initialTimeInSeconds - 1);
  // eslint-disable-next-line no-undef
  const intervalIdRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    if (secondsLeft === 0) {
      props.onTimesUp();
    }

    return () => clearInterval(intervalIdRef.current as unknown as number);
  }, [secondsLeft, intervalIdRef.current]);

  return <Typography sx={styles.text}>{secondsLeft}</Typography>;
};
