import { Box } from '@mui/material';
import { useState } from 'react';
import { RestartContext } from '../../../../../contexts';
import * as styles from './styles';
import {
  GeneratedTextAreaContainer,
  RestartButtonContainer,
  TimeCounter,
  TrainingConfigurationContainer,
  WordCounter
} from '../../../../common';
import { trainingStateActions, useAppDispatch, useAppSelector } from '../../../../../state';
import { TimeModeType } from '../../../../../types';

export const HomePage = (): JSX.Element => {
  const [isRestartScheduled, setRestartScheduledStatus] = useState(true);
  const dispatch = useAppDispatch();
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const trainingState = useAppSelector((store) => store.data.trainingState.state);

  const counter =
    trainingConfiguration.timeMode === TimeModeType.TurnedOff ? (
      <WordCounter totalWords={trainingConfiguration.wordsMode} />
    ) : (
      <TimeCounter onTimesUp={() => dispatch(trainingStateActions.setState('finished'))} />
    );

  return (
    <RestartContext.Provider value={{ isRestartScheduled, setRestartScheduledStatus }}>
      <Box sx={styles.layoutContainer}>
        <Box sx={styles.contentContainer}>
          <TrainingConfigurationContainer />
          <Box sx={styles.generatedTextAreaContainer}>
            {trainingState === 'started' && counter}
            <GeneratedTextAreaContainer />
          </Box>
          <RestartButtonContainer />
        </Box>
      </Box>
    </RestartContext.Provider>
  );
};
