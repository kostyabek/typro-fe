export interface TrainingResults {
  wordsPerMinute: number;
  accuracy: number;
  timeInMilliseconds: number;
  charactersStats: CharactersStats;
  trainingType: string;
}

export interface CharactersStats {
  initial: number;
  correct: number;
  incorrect: number;
  extra: number;
}
