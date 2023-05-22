import { Box, Typography, useTheme } from '@mui/material';
import { useContext, useMemo } from 'react';
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
import { createStyles } from './styles';
import { RestartContext } from '../../../../../../contexts';
import { useAppDispatch, trainingConfigurationActions } from '../../../../../../state';
import { TimeModeType, WordsModeType } from '../../../../../../types';
import { AppIconButton } from '../../../../elements';

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

interface ConfigurationChangeHandlers {
  punctuationChangeHandler: (isEnabled: boolean) => void;
  numbersChangeHandler: (isEnabled: boolean) => void;
  wordsModeChangeHandler: (mode: WordsModeType) => void;
  timeModeChangeHandler: (mode: TimeModeType) => void;
}

interface Props {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  isDisabled: boolean;
  configurationChangeHandlers: ConfigurationChangeHandlers;
}

export const IconSwitchesElement = (props: Props): JSX.Element => {
  const { setRestartScheduledStatus } = useContext(RestartContext);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const punctuationClickHandler = (): void => {
    const newValue = !props.isPunctuationGenerated;
    dispatch(trainingConfigurationActions.setPunctuationGeneration(newValue));
    setRestartScheduledStatus(true);
    props.configurationChangeHandlers.punctuationChangeHandler(newValue);
  };

  const numbersClickHandler = (): void => {
    const newValue = !props.areNumbersGenerated;
    dispatch(trainingConfigurationActions.setNumbersGeneration(newValue));
    setRestartScheduledStatus(true);
    props.configurationChangeHandlers.numbersChangeHandler(newValue);
  };

  const wordsModeClickHandler = (): void => {
    let newValue: WordsModeType = WordsModeType.TurnedOff;

    if (props.timeMode !== TimeModeType.TurnedOff) {
      props.configurationChangeHandlers.timeModeChangeHandler(TimeModeType.TurnedOff);
      dispatch(trainingConfigurationActions.setTimeMode(TimeModeType.TurnedOff));
    }
    const index = wordsModes.indexOf(props.wordsMode);
    if (wordsModes.indexOf(props.wordsMode) === wordsModes.length - 1) {
      newValue = wordsModes[0];
      dispatch(trainingConfigurationActions.setWordsMode(newValue));
    } else {
      newValue = wordsModes[index + 1];
      dispatch(trainingConfigurationActions.setWordsMode(newValue));
    }
    props.configurationChangeHandlers.wordsModeChangeHandler(newValue);
    setRestartScheduledStatus(true);
  };

  const timeModeClickHandler = (): void => {
    let newValue: TimeModeType = TimeModeType.TurnedOff;

    const index = timeModes.indexOf(props.timeMode);
    if (props.wordsMode !== WordsModeType.TurnedOff) {
      props.configurationChangeHandlers.wordsModeChangeHandler(WordsModeType.TurnedOff);
      dispatch(trainingConfigurationActions.setWordsMode(WordsModeType.TurnedOff));
    }
    if (timeModes.indexOf(props.timeMode) === timeModes.length - 1) {
      newValue = timeModes[0];
      dispatch(trainingConfigurationActions.setTimeMode(newValue));
    } else {
      newValue = timeModes[index + 1];
      dispatch(trainingConfigurationActions.setTimeMode(newValue));
    }
    props.configurationChangeHandlers.timeModeChangeHandler(newValue);
    setRestartScheduledStatus(true);
  };

  return (
    <Box sx={styles.iconsMainContainer}>
      <Box sx={styles.iconsContainer}>
        <AppIconButton onClick={punctuationClickHandler} disabled={props.isDisabled}>
          {props.isPunctuationGenerated ? <ActivePunctuationIcon /> : <PunctuationIcon />}
        </AppIconButton>
        <AppIconButton onClick={numbersClickHandler} disabled={props.isDisabled}>
          {props.areNumbersGenerated ? <ActiveNumbersIcon /> : <NumbersIcon />}
        </AppIconButton>
      </Box>
      <Box sx={styles.iconsContainer}>
        <Box sx={styles.iconContainer}>
          <AppIconButton onClick={wordsModeClickHandler} disabled={props.isDisabled}>
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
            <AppIconButton onClick={timeModeClickHandler} disabled={props.isDisabled}>
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
