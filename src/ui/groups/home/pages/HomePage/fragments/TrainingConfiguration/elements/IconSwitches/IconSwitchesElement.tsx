import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import {
  ActiveNumbersIcon,
  ActivePunctuationIcon,
  ActiveTimeModeIcon,
  ActiveWordsModeIcon,
  NumbersIcon,
  PunctuationIcon,
  TimeModeIcon,
  WordsModeIcon
} from './icons';
import * as styles from './styles';

enum TimeModeType {
  TurnedOff = 0,
  FifteenSeconds = 15,
  ThirtySeconds = 30,
  OneMinute = 60,
  TwoMinutes = 120
}

const timeModes = [
  TimeModeType.FifteenSeconds,
  TimeModeType.ThirtySeconds,
  TimeModeType.OneMinute,
  TimeModeType.TwoMinutes
];

enum WordsModeType {
  TurnedOff = 0,
  TenWords = 10,
  TwentyFiveWords = 25,
  FiftyWords = 50,
  OneHundredWords = 100
}

const wordsModes = [
  WordsModeType.TenWords,
  WordsModeType.TwentyFiveWords,
  WordsModeType.FiftyWords,
  WordsModeType.OneHundredWords
];

export const IconSwitchesElement = (): JSX.Element => {
  const [isPunctuationEnabled, setIsPunctuationEnabled] = useState(false);
  const [areNumbersEnabled, setAreNumbersEnabled] = useState(false);
  const [timeMode, setTimeModeType] = useState<TimeModeType>(TimeModeType.TurnedOff);
  const [wordsMode, setWordsModeType] = useState<WordsModeType>(WordsModeType.TwentyFiveWords);

  const punctuationClickHandler = (): void => setIsPunctuationEnabled(!isPunctuationEnabled);
  const numbersClickHandler = (): void => setAreNumbersEnabled(!areNumbersEnabled);
  const wordsModeClickHandler = (): void => {
    if (timeMode !== TimeModeType.TurnedOff) {
      setTimeModeType(TimeModeType.TurnedOff);
    }
    const index = wordsModes.indexOf(wordsMode);
    if (wordsModes.indexOf(wordsMode) === wordsModes.length - 1) {
      setWordsModeType(wordsModes[0]);
    } else {
      setWordsModeType(wordsModes[index + 1]);
    }
  };
  const timeModeClickHandler = (): void => {
    const index = timeModes.indexOf(timeMode);
    if (wordsMode !== WordsModeType.TurnedOff) {
      setWordsModeType(WordsModeType.TurnedOff);
    }
    if (timeModes.indexOf(timeMode) === timeModes.length - 1) {
      setTimeModeType(timeModes[0]);
    } else {
      setTimeModeType(timeModes[index + 1]);
    }
  };

  return (
    <Box sx={styles.iconsMainContainer}>
      <Box sx={styles.iconsContainer}>
        <Button onClick={punctuationClickHandler}>
          {isPunctuationEnabled ? <ActivePunctuationIcon /> : <PunctuationIcon />}
        </Button>
        <Button onClick={numbersClickHandler}>
          {areNumbersEnabled ? <ActiveNumbersIcon /> : <NumbersIcon />}
        </Button>
      </Box>
      <Box sx={styles.iconsContainer}>
        <Box sx={styles.iconContainer}>
          <Button onClick={wordsModeClickHandler}>
            {wordsMode === WordsModeType.TurnedOff ? <WordsModeIcon /> : <ActiveWordsModeIcon />}
          </Button>
          {wordsMode !== WordsModeType.TurnedOff && (
            <Typography sx={styles.modeLabel}>{wordsMode}</Typography>
          )}
        </Box>
        <Box>
          <Box sx={styles.iconContainer}>
            <Button onClick={timeModeClickHandler}>
              {timeMode === TimeModeType.TurnedOff ? <TimeModeIcon /> : <ActiveTimeModeIcon />}
            </Button>
            {timeMode !== TimeModeType.TurnedOff && (
              <Typography sx={styles.modeLabel}>{timeMode}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
