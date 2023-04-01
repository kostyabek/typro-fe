import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../state';
import { TrainingConfiguration, TimeModeType } from '../../../../types';
import { Groups } from '../../../../utils';
import { TrainingResultsFragment } from './TrainingResultsFragment';

const getTrainingTypeName = (trainingConfiguration: TrainingConfiguration): string => {
  const language = trainingConfiguration.languageInfo.name;
  const isWordsMode = trainingConfiguration.timeMode === TimeModeType.TurnedOff;
  const mode = isWordsMode ? 'words' : 'time';
  const modeRelatedValue = Number(
    isWordsMode ? trainingConfiguration.wordsMode : trainingConfiguration.timeMode
  );

  /* eslint-disable @typescript-eslint/restrict-template-expressions  */
  return `${language} ${mode} ${modeRelatedValue}`;
};

export const TrainingResultsContainer = (): JSX.Element => {
  const { trainingResults, trainingConfiguration } = useAppSelector((store) => {
    return {
      trainingResults: store.data.trainingResults,
      trainingConfiguration: store.data.trainingConfiguration
    };
  });

  if (trainingResults.timeInMilliseconds === 0) {
    return <Navigate to={Groups.Home} />;
  }

  const trainingType = getTrainingTypeName(trainingConfiguration);
  const timeInSeconds = trainingResults.timeInMilliseconds / 1000;

  return (
    <TrainingResultsFragment
      accuracy={trainingResults.accuracy}
      wordsPerMinute={trainingResults.wordsPerMinute}
      testType={trainingType}
      timeInSeconds={timeInSeconds}
      characterStats={trainingResults.charactersStats}
    />
  );
};
