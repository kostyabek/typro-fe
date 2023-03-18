import axios from 'axios';
import { TimeModeType, WordsModeType, LanguageInfo } from '../types';
import { configuration } from '../utils';

const relativeBasePath = 'training/';

interface GetGeneratedTextRequestModel {
  languageId: number;
  timeMode: TimeModeType;
  wordsMode: WordsModeType;
  isPunctuationGenerated: boolean;
  areNumbersGenerated: boolean;
}

interface GetGeneratedTextResponseModel {
  value: string[][];
}

export const getGeneratedText = async (
  requestModel: GetGeneratedTextRequestModel
): Promise<GetGeneratedTextResponseModel> => {
  const response = await axios.get<GetGeneratedTextResponseModel>(
    `${configuration.serverUrl}${relativeBasePath}text-generation`,
    {
      params: requestModel
    }
  );

  return response.data;
};

interface GetSupportedLanguagesResponse {
  value: LanguageInfo[];
}

export const getSupportedLanguages = async (): Promise<GetSupportedLanguagesResponse> => {
  const response = await axios.get<GetSupportedLanguagesResponse>(
    `${configuration.serverUrl}${relativeBasePath}supported-languages`
  );

  return response.data;
};
