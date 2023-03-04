import { useAppSelector } from '../../../../../../../state';
import { TrainingConfigurationFragment } from './TrainingConfigurationFragment';

export const TrainingConfigurationContainer = (): JSX.Element => {
  const { areNumbersGenerated, isPunctuationGenerated, language, timeMode, wordsMode } =
    useAppSelector((state) => state.data.training);

  const mockedLanguages = ['english', 'ukrainian', 'russian'];
  return (
    <TrainingConfigurationFragment
      languages={mockedLanguages}
      trainingConfiguration={{
        areNumbersGenerated,
        isPunctuationGenerated,
        language,
        timeMode,
        wordsMode
      }}
    />
  );
};
