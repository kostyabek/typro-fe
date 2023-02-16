import { TrainingConfigurationFragment } from './TrainingConfigurationFragment';

export const TrainingConfigurationContainer = (): JSX.Element => {
  const mockedLanguages = ['english', 'ukrainian', 'russian'];
  return <TrainingConfigurationFragment languages={mockedLanguages} />;
};
