import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeModeType, WordsModeType } from '../../../types';

interface TrainingConfigurationSlice {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  language: string;
}

const initialState: TrainingConfigurationSlice = {
  areNumbersGenerated: false,
  isPunctuationGenerated: false,
  wordsMode: WordsModeType.TwentyFiveWords,
  timeMode: TimeModeType.TurnedOff,
  language: 'english'
};

const slice = createSlice({
  name: 'data/trainingConfiguration',
  initialState,
  reducers: {
    setNumbersGeneration: (state, action: PayloadAction<boolean>) => {
      state.areNumbersGenerated = action.payload;
    },
    setPunctuationGeneration: (state, action: PayloadAction<boolean>) => {
      state.isPunctuationGenerated = action.payload;
    },
    setWordsMode: (state, action: PayloadAction<WordsModeType>) => {
      state.wordsMode = action.payload;
    },
    setTimeMode: (state, action: PayloadAction<TimeModeType>) => {
      state.timeMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    }
  }
});

export const trainingActions = slice.actions;
export default slice.reducer;
