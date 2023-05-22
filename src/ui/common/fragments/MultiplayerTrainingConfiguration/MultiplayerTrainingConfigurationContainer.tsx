import { useChannel } from '@ably-labs/react-hooks';
import { trainingConfigurationActions, useAppDispatch, useAppSelector } from '../../../../state';
import { ensure } from '../../../../utils';
import { LoaderElement } from '../../elements';
import TrainingConfigurationFragment from './MultiplayerTrainingConfigurationFragment';
import { WordsModeType, TimeModeType } from '../../../../types';
import { useContext } from 'react';
import { RestartContext } from '../../../../contexts';

export const MultiplayerTrainingConfigurationContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { areNumbersGenerated, isPunctuationGenerated, languagesInfo, timeMode, wordsMode } =
    useAppSelector((state) => state.data.trainingConfiguration);
  const { isActive, isCreator, lobbyInfo } = useAppSelector((store) => store.data.multiplayer);
  const [channel] = useChannel(lobbyInfo.channelId, () => {});
  const { setRestartScheduledStatus } = useContext(RestartContext);

  useChannel(lobbyInfo.channelId, 'punctuation-change', (message) => {
    if (isCreator) {
      return;
    }
    dispatch(trainingConfigurationActions.setPunctuationGeneration(message.data.isEnabled));
    setRestartScheduledStatus(true);
  });

  useChannel(lobbyInfo.channelId, 'numbers-change', (message) => {
    if (isCreator) {
      return;
    }
    dispatch(trainingConfigurationActions.setNumbersGeneration(message.data.isEnabled));
    setRestartScheduledStatus(true);
  });

  useChannel(lobbyInfo.channelId, 'words-mode-change', (message) => {
    if (isCreator) {
      return;
    }
    dispatch(trainingConfigurationActions.setWordsMode(message.data.mode));
    setRestartScheduledStatus(true);
  });

  useChannel(lobbyInfo.channelId, 'time-mode-change', (message) => {
    if (isCreator) {
      return;
    }
    dispatch(trainingConfigurationActions.setTimeMode(message.data.mode));
    setRestartScheduledStatus(true);
  });

  useChannel(lobbyInfo.channelId, 'language-change', (message) => {
    if (isCreator) {
      return;
    }
    dispatch(trainingConfigurationActions.setActiveLanguage(message.data.languageId));
    setRestartScheduledStatus(true);
  });

  if (languagesInfo.length === 0) {
    return <LoaderElement />;
  }

  const punctuationChangeHandler = (isEnabled: boolean): void => {
    channel.publish('punctuation-change', { isEnabled });
  };

  const numbersChangeHandler = (isEnabled: boolean): void => {
    channel.publish('numbers-change', { isEnabled });
  };

  const wordsModeChangeHandler = (mode: WordsModeType): void => {
    channel.publish('words-mode-change', { mode });
  };

  const timeModeChangeHandler = (mode: TimeModeType): void => {
    channel.publish('time-mode-change', { mode });
  };

  const languageChangeHandler = (languageId: number): void => {
    channel.publish('language-change', { languageId });
  };

  const activeLanguageInfo = ensure(languagesInfo.find((e) => e.isActive));

  return (
    <TrainingConfigurationFragment
      languagesInfo={languagesInfo}
      trainingConfiguration={{
        areNumbersGenerated,
        isPunctuationGenerated,
        languageInfo: activeLanguageInfo,
        timeMode,
        wordsMode
      }}
      configurationChangeHandlers={{
        punctuationChangeHandler,
        numbersChangeHandler,
        wordsModeChangeHandler,
        timeModeChangeHandler,
        languageChangeHandler
      }}
      isDisabled={isActive && !isCreator}
    />
  );
};
