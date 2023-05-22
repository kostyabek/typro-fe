import { TimeModeType, WordsModeType } from '../enums';

export interface GetHighLevelTrainingResultChartInfo {
  fromDate: Date;
  languageId: number;
  wordsModeType: WordsModeType;
  timeModeType: TimeModeType;
}
