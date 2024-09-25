import { Box, Fade } from '@mui/material';
import { memo } from 'react';

import { useAppSelector } from '../../../../state';
import { WordsModeType, TimeModeType, LanguageInfo } from '../../../../types';

import { IconSwitchesElement, LanguageSelectElement } from './elements';
import * as styles from './styles';

interface TrainingConfiguration {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  languageInfo: LanguageInfo;
}

interface ConfigurationChangeHandlers {
  punctuationChangeHandler: (isEnabled: boolean) => void;
  numbersChangeHandler: (isEnabled: boolean) => void;
  wordsModeChangeHandler: (mode: WordsModeType) => void;
  timeModeChangeHandler: (mode: TimeModeType) => void;
  languageChangeHandler: (languageId: number) => void;
}

interface Props {
  languagesInfo: LanguageInfo[];
  trainingConfiguration: TrainingConfiguration;
  isDisabled: boolean;
  configurationChangeHandlers: ConfigurationChangeHandlers;
}

const MultiplayerTrainingConfigurationFragment = (props: Props): JSX.Element => {
  const { state: trainingState } = useAppSelector((store) => store.data.trainingState);

  return (
    <Fade in={trainingState !== 'started'}>
      <Box sx={styles.mainContainer}>
        <IconSwitchesElement
          {...props.trainingConfiguration}
          isDisabled={props.isDisabled}
          configurationChangeHandlers={{
            punctuationChangeHandler: props.configurationChangeHandlers.punctuationChangeHandler,
            numbersChangeHandler: props.configurationChangeHandlers.numbersChangeHandler,
            wordsModeChangeHandler: props.configurationChangeHandlers.wordsModeChangeHandler,
            timeModeChangeHandler: props.configurationChangeHandlers.timeModeChangeHandler
          }}
        />
        <LanguageSelectElement
          languagesInfo={props.languagesInfo}
          preferredLanguageInfo={props.trainingConfiguration.languageInfo}
          isDisabled={props.isDisabled}
          onLanguageSelectionChange={props.configurationChangeHandlers.languageChangeHandler}
        />
      </Box>
    </Fade>
  );
};

export default memo(MultiplayerTrainingConfigurationFragment);
