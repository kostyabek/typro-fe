export interface CharactersStats {
  initial: number;
  correct: number;
  incorrect: number;
  extra: number;
}
export interface TrainingResults {
  wordsPerMinute: number;
  accuracy: number;
  timeInMilliseconds: number;
  charactersStats: CharactersStats;
  place?: number;
}
