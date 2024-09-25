import { WordsModeType, TimeModeType } from '../enums';

import { LanguageInfo } from './LanguageInfo';

export interface TrainingConfiguration {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  languagesInfo: LanguageInfo[];
}
