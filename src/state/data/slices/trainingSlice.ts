import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimeModeType, WordsModeType, LanguageInfo } from '../../../types';

interface TrainingConfigurationSlice {
  areNumbersGenerated: boolean;
  isPunctuationGenerated: boolean;
  wordsMode: WordsModeType;
  timeMode: TimeModeType;
  languageInfo: LanguageInfo;
}

const initialState: TrainingConfigurationSlice = {
  areNumbersGenerated: false,
  isPunctuationGenerated: false,
  wordsMode: WordsModeType.TwentyFiveWords,
  timeMode: TimeModeType.TurnedOff,
  languageInfo: { id: 1, name: 'English' }
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
    setLanguage: (state, action: PayloadAction<LanguageInfo>) => {
      state.languageInfo = action.payload;
    }
  }
});

export const trainingActions = slice.actions;
export default slice.reducer;
