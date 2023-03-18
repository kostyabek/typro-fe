import { Box } from '@mui/material';
import { memo } from 'react';
import { LanguageInfo, TimeModeType, WordsModeType } from '../../../../../../../types';
import { IconSwitchesElement, LanguageSelectElement } from './elements';
import * as styles from './styles';

interface TrainingConfiguration {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  languageInfo: LanguageInfo;
}

interface Props {
  languagesInfo: LanguageInfo[];
  trainingConfiguration: TrainingConfiguration;
}

const TrainingConfigurationFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <IconSwitchesElement {...props.trainingConfiguration} />
      <LanguageSelectElement
        languagesInfo={props.languagesInfo}
        preferredLanguageInfo={props.trainingConfiguration.languageInfo}
      />
    </Box>
  );
};

export default memo(TrainingConfigurationFragment);
