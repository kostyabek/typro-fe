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

interface Props {
  languagesInfo: LanguageInfo[];
  trainingConfiguration: TrainingConfiguration;
}

const TrainingConfigurationFragment = (props: Props): JSX.Element => {
  const { state: trainingState } = useAppSelector((store) => store.data.trainingState);

  return (
    <Fade in={trainingState !== 'started'}>
      <Box sx={styles.mainContainer}>
        <IconSwitchesElement {...props.trainingConfiguration} />
        <LanguageSelectElement
          languagesInfo={props.languagesInfo}
          preferredLanguageInfo={props.trainingConfiguration.languageInfo}
        />
      </Box>
    </Fade>
  );
};

export default memo(TrainingConfigurationFragment);
