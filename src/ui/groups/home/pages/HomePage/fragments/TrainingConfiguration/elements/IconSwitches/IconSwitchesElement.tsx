import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { RestartContext } from '../../../../../../../../../contexts';
import { trainingConfigurationActions, useAppDispatch } from '../../../../../../../../../state';
import { TimeModeType, WordsModeType } from '../../../../../../../../../types';
import { AppIconButton } from '../../../../../../../../common';
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

const timeModes = [
  TimeModeType.FifteenSeconds,
  TimeModeType.ThirtySeconds,
  TimeModeType.OneMinute,
  TimeModeType.TwoMinutes
];

const wordsModes = [
  WordsModeType.TenWords,
  WordsModeType.TwentyFiveWords,
  WordsModeType.FiftyWords,
  WordsModeType.OneHundredWords
];

interface Props {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
}

export const IconSwitchesElement = (props: Props): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  const dispatch = useAppDispatch();

  const punctuationClickHandler = (): void => {
    dispatch(trainingConfigurationActions.setPunctuationGeneration(!props.isPunctuationGenerated));
    setRestartScheduledStatus(true);
  };

  const numbersClickHandler = (): void => {
    dispatch(trainingConfigurationActions.setNumbersGeneration(!props.areNumbersGenerated));
    setRestartScheduledStatus(true);
  };

  const wordsModeClickHandler = (): void => {
    if (props.timeMode !== TimeModeType.TurnedOff) {
      dispatch(trainingConfigurationActions.setTimeMode(TimeModeType.TurnedOff));
    }
    const index = wordsModes.indexOf(props.wordsMode);
    if (wordsModes.indexOf(props.wordsMode) === wordsModes.length - 1) {
      dispatch(trainingConfigurationActions.setWordsMode(wordsModes[0]));
    } else {
      dispatch(trainingConfigurationActions.setWordsMode(wordsModes[index + 1]));
    }
    setRestartScheduledStatus(true);
  };

  const timeModeClickHandler = (): void => {
    const index = timeModes.indexOf(props.timeMode);
    if (props.wordsMode !== WordsModeType.TurnedOff) {
      dispatch(trainingConfigurationActions.setWordsMode(WordsModeType.TurnedOff));
    }
    if (timeModes.indexOf(props.timeMode) === timeModes.length - 1) {
      dispatch(trainingConfigurationActions.setTimeMode(timeModes[0]));
    } else {
      dispatch(trainingConfigurationActions.setTimeMode(timeModes[index + 1]));
    }
    setRestartScheduledStatus(true);
  };

  return (
    <Box sx={styles.iconsMainContainer}>
      <Box sx={styles.iconsContainer}>
        <AppIconButton onClick={punctuationClickHandler}>
          {props.isPunctuationGenerated ? <ActivePunctuationIcon /> : <PunctuationIcon />}
        </AppIconButton>
        <AppIconButton onClick={numbersClickHandler}>
          {props.areNumbersGenerated ? <ActiveNumbersIcon /> : <NumbersIcon />}
        </AppIconButton>
      </Box>
      <Box sx={styles.iconsContainer}>
        <Box sx={styles.iconContainer}>
          <AppIconButton onClick={wordsModeClickHandler}>
            {props.wordsMode === WordsModeType.TurnedOff ? (
              <WordsModeIcon />
            ) : (
              <ActiveWordsModeIcon />
            )}
          </AppIconButton>
          {props.wordsMode !== WordsModeType.TurnedOff && (
            <Typography sx={styles.modeLabel}>{props.wordsMode}</Typography>
          )}
        </Box>
        <Box>
          <Box sx={styles.iconContainer}>
            <AppIconButton onClick={timeModeClickHandler}>
              {props.timeMode === TimeModeType.TurnedOff ? (
                <TimeModeIcon />
              ) : (
                <ActiveTimeModeIcon />
              )}
            </AppIconButton>
            {props.timeMode !== TimeModeType.TurnedOff && (
              <Typography sx={styles.modeLabel}>{props.timeMode}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
