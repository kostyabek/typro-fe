import { Axios } from 'axios';
import {
  TimeModeType,
  WordsModeType,
  LanguageInfo,
  UniversalResponse,
  TrainingResults
} from '../types';
import { axiosPublic } from './axios';

const relativeBasePath = 'training/';

interface GetGeneratedTextRequestModel {
  languageId: number;
  timeMode: TimeModeType;
  wordsMode: WordsModeType;
  isPunctuationGenerated: boolean;
  areNumbersGenerated: boolean;
}

export const getGeneratedText = async (
  requestModel: GetGeneratedTextRequestModel
): Promise<string[][]> => {
  const response = await axiosPublic.get<UniversalResponse<string[][]>>(
    `${relativeBasePath}text-generation`,
    {
      params: requestModel
    }
  );

  return response.data.value;
};

interface GetSupportedLanguagesResponse {
  value: LanguageInfo[];
}

export const getSupportedLanguages = async (): Promise<GetSupportedLanguagesResponse> => {
  const response = await axiosPublic.get<GetSupportedLanguagesResponse>(
    `${relativeBasePath}supported-languages`
  );

  return response.data;
};

interface CreateTrainingResultsRequest {
  languageId: number;
  dateConducted: Date;
  timeModeType: TimeModeType;
  wordsModeType: WordsModeType;
}

export const createTrainingResults = async (
  axios: Axios,
  results: CreateTrainingResultsRequest
): Promise<number> => {
  const response = await axios.post<UniversalResponse<number>>(
    `${relativeBasePath}results`,
    results
  );
  return response.data.value;
};

interface UpdateTrainingResultsRequest extends TrainingResults {}

export const updateTrainingResults = async (
  axios: Axios,
  results: UpdateTrainingResultsRequest,
  id: number
): Promise<void> => {
  await axios.patch(`${relativeBasePath}results/${id}`, results);
};
