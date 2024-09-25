import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TimeModeType, WordsModeType, LanguageInfo, TrainingConfiguration } from '../../../types';
import { ensure } from '../../../utils';

type TrainingConfigurationSlice = TrainingConfiguration;

const initialState: TrainingConfigurationSlice = {
  areNumbersGenerated: false,
  isPunctuationGenerated: false,
  wordsMode: WordsModeType.TwentyFiveWords,
  timeMode: TimeModeType.TurnedOff,
  languagesInfo: []
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
    setLanguages: (state, action: PayloadAction<LanguageInfo[]>) => {
      state.languagesInfo = action.payload;
    },
    setActiveLanguage: (state, action: PayloadAction<number>) => {
      ensure(state.languagesInfo.find((e) => e.isActive)).isActive = false;
      ensure(state.languagesInfo.find((e) => e.id === action.payload)).isActive = true;
    }
  }
});

export const trainingConfigurationActions = slice.actions;
export default slice.reducer;
