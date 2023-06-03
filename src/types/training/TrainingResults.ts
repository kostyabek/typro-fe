export interface TrainingResults {
  wordsPerMinute: number;
  accuracy: number;
  timeInMilliseconds: number;
  charactersStats: CharactersStats;
  place?: number;
}

export interface CharactersStats {
  initial: number;
  correct: number;
  incorrect: number;
  extra: number;
}
