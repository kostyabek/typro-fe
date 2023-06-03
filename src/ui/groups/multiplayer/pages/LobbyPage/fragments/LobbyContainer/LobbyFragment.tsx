import { Box, Fade, Typography } from '@mui/material';
import {
  AppPresenceData,
  PlayerInfo,
  TimeModeType,
  WordsModeType
} from '../../../../../../../types';
import {
  AppIconButton,
  AppTextButton,
  MultiplayerGeneratedTextAreaContainer,
  MultiplayerRestartButtonContainer,
  TimeCounter,
  MultiplayerTrainingConfigurationContainer,
  WordCounter
} from '../../../../../../common';
import { PlayersInfoElement } from '../../elements';
import * as styles from './styles';
import { useState } from 'react';
import { RestartContext } from '../../../../../../../contexts';
import { CheckMarkIcon, CopyIcon, CrossIcon } from './icons';
import { useCopyToClipboard } from '../../../../../../../hooks';
import { useAppSelector, trainingStateActions, useAppDispatch } from '../../../../../../../state';

interface Props {
  isCreator: boolean;
  lobbyId: string;
  playersInfo: PlayerInfo[];
  updatePresenceData: (messageOrPresenceObject: AppPresenceData) => void;
  onStart: () => void;
}

export const LobbyFragment = (props: Props): JSX.Element => {
  const [isRestartScheduled, setRestartScheduledStatus] = useState(true);
  const [copyMethod, copyResult] = useCopyToClipboard();
  const trainingState = useAppSelector((store) => store.data.trainingState.state);
  const trainingConfiguration = useAppSelector((store) => store.data.trainingConfiguration);
  const dispatch = useAppDispatch();

  const copyClickHandler = (): void => {
    void copyMethod(props.lobbyId);
  };

  const isWordsMode = trainingConfiguration.wordsMode !== WordsModeType.TurnedOff;

  const counter =
    trainingConfiguration.timeMode === TimeModeType.TurnedOff ? (
      <WordCounter totalWords={trainingConfiguration.wordsMode} />
    ) : (
      <TimeCounter onTimesUp={() => dispatch(trainingStateActions.setState('finished'))} />
    );

  return (
    <RestartContext.Provider value={{ isRestartScheduled, setRestartScheduledStatus }}>
      <Box sx={styles.outerLayoutContainer}>
        <Box>
          <Box sx={styles.inviteCodeContainer}>
            <Typography sx={styles.inviteCodeText}>Invite code: {props.lobbyId}</Typography>
            <AppIconButton sx={styles.copyButton} onClick={copyClickHandler}>
              <CopyIcon />
            </AppIconButton>
            {copyResult?.state === 'success' && (
              <Fade in={copyResult?.state === 'success'}>
                <Box sx={styles.copyResultIconContainer}>
                  <CheckMarkIcon />
                </Box>
              </Fade>
            )}
            {copyResult?.state === 'error' && (
              <Fade in={copyResult?.state === 'error'}>
                <Box sx={styles.copyResultIconContainer}>
                  <CrossIcon />
                </Box>
              </Fade>
            )}
          </Box>
          <PlayersInfoElement playersInfo={props.playersInfo} isWordsMode={isWordsMode} />
        </Box>
        <Box sx={styles.innerLayoutContainer}>
          <Box sx={styles.contentContainer}>
            <MultiplayerTrainingConfigurationContainer />
            <Box sx={styles.generatedTextAreaContainer}>
              {trainingState === 'started' && counter}
              <MultiplayerGeneratedTextAreaContainer />
            </Box>
            {props.isCreator && <MultiplayerRestartButtonContainer />}
            {props.isCreator && (
              <Fade in={trainingState !== 'started'}>
                <Box>
                  <AppTextButton disabled={props.playersInfo.length === 1} onClick={props.onStart}>
                    Start
                  </AppTextButton>
                </Box>
              </Fade>
            )}
          </Box>
        </Box>
      </Box>
    </RestartContext.Provider>
  );
};
