import { Axios } from 'axios';
import {
  GetHighLevelTrainingResultChartInfo,
  HighLevelProfileInfo,
  HighLevelTrainingResultChartDto,
  HighLevelTrainingResultDto,
  UniversalResponse
} from '../types';

const relativeBasePath = 'user/';

export const getHighLevelProfileInfo = async (axios: Axios): Promise<HighLevelProfileInfo> => {
  const response = await axios.get<UniversalResponse<HighLevelProfileInfo>>(
    `${relativeBasePath}high-level-stats-info`
  );

  return response.data.value;
};

export const getHighLevelTrainingResults = async (
  axios: Axios
): Promise<HighLevelTrainingResultDto[]> => {
  const response = await axios.get<UniversalResponse<HighLevelTrainingResultDto[]>>(
    `${relativeBasePath}high-level-training-results`
  );

  return response.data.value;
};

export const getNickname = async (axios: Axios): Promise<string> => {
  const response = await axios.get<UniversalResponse<string>>(`${relativeBasePath}nickname`);

  return response.data.value;
};

export const updateNickname = async (axios: Axios, nickname: string): Promise<string> => {
  const response = await axios.patch<UniversalResponse<string>>(`${relativeBasePath}`, nickname);

  return response.data.value;
};

export const getWordsPerMinuteToAccuracyStats = async (
  axios: Axios,
  requestModel: GetHighLevelTrainingResultChartInfo
): Promise<HighLevelTrainingResultChartDto[]> => {
  const response = await axios.get<UniversalResponse<HighLevelTrainingResultChartDto[]>>(
    `${relativeBasePath}words-per-minute-to-accuracy-stats`,
    {
      params: requestModel
    }
  );

  return response.data.value;
};
