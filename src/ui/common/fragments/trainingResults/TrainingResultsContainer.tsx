import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../../state';
import { Groups } from '../../../../utils';
import { TrainingResultsFragment } from './TrainingResultsFragment';

export const TrainingResultsContainer = (): JSX.Element => {
  const trainingResults = useAppSelector((store) => store.data.trainingResults);

  if (trainingResults.timeInMilliseconds === 0) {
    return <Navigate to={Groups.Home} />;
  }

  const timeInSeconds = trainingResults.timeInMilliseconds / 1000;

  return (
    <TrainingResultsFragment
      accuracy={trainingResults.accuracy}
      wordsPerMinute={trainingResults.wordsPerMinute}
      testType={trainingResults.trainingType}
      timeInSeconds={timeInSeconds}
      characterStats={trainingResults.charactersStats}
    />
  );
};
