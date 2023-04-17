import { useAppSelector } from '../../../../../../../state';
import TrainingConfigurationFragment from './TrainingConfigurationFragment';
import { LoaderElement } from '../../../../../../common';
import { ensure } from '../../../../../../../utils';

export const TrainingConfigurationContainer = (): JSX.Element => {
  const { areNumbersGenerated, isPunctuationGenerated, languagesInfo, timeMode, wordsMode } =
    useAppSelector((state) => state.data.trainingConfiguration);

  if (languagesInfo.length === 0) {
    return <LoaderElement />;
  }

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
    />
  );
};
