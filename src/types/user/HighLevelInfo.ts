import { TimeModeType, WordsModeType } from '../enums';

export interface HighLevelProfileInfo {
  nickname: string;
  memberSince: Date;
  testsStarted: number;
  testsCompleted: number;
}

export interface HighLevelTrainingResultDto {
  wordsModeType: WordsModeType;
  timeModeType: TimeModeType;
  wordsPerMinute: number;
  accuracy: number;
  dateConducted: Date;
}
