import { Axios } from 'axios';
import { HighLevelProfileInfo, HighLevelTrainingResultDto, UniversalResponse } from '../types';

const relativeBasePath = 'user/';

export const getHighLevelProfileInfo = async (axios: Axios): Promise<HighLevelProfileInfo> => {
  const response = await axios.get<UniversalResponse<HighLevelProfileInfo>>(
    `${relativeBasePath}high-level-profile-info`
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
