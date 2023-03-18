import { useAppSelector } from '../../../../../../../state';
import TrainingConfigurationFragment from './TrainingConfigurationFragment';
import { trainingHttpClient } from '../../../../../../../httpClients';
import { useQuery } from '@tanstack/react-query';

export const TrainingConfigurationContainer = (): JSX.Element => {
  const queryResult = useQuery({
    queryKey: ['supportedLanguages'],
    queryFn: trainingHttpClient.getSupportedLanguages
  });

  const supportedLanguagesInfo = queryResult.data?.value ?? [];

  const { areNumbersGenerated, isPunctuationGenerated, languageInfo, timeMode, wordsMode } =
    useAppSelector((state) => state.data.training);

  return (
    <TrainingConfigurationFragment
      languagesInfo={supportedLanguagesInfo}
      trainingConfiguration={{
        areNumbersGenerated,
        isPunctuationGenerated,
        languageInfo,
        timeMode,
        wordsMode
      }}
    />
  );
};
