import { Box } from '@mui/material';
import { TimeModeType, WordsModeType } from '../../../../../../../types';
import { IconSwitchesElement, LanguageSelectElement } from './elements';
import * as styles from './styles';

interface TrainingConfiguration {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  language: string;
}

interface Props {
  languages: string[];
  trainingConfiguration: TrainingConfiguration;
}

export const TrainingConfigurationFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <IconSwitchesElement {...props.trainingConfiguration} />
      <LanguageSelectElement
        languages={props.languages}
        preferredLanguage={props.trainingConfiguration.language}
      />
    </Box>
  );
};
