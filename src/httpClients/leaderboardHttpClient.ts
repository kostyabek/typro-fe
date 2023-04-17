import { TimeModeType, WordsModeType, UniversalResponse, LeaderboardEntry } from '../types';
import { axiosPublic } from './axios';

const relativeBasePath = 'leaderboards/';

interface GetLeaderboardRequestModel {
  languageId: number;
  timeModeType: TimeModeType;
  wordsModeType: WordsModeType;
  fromDate: Date;
  toDate: Date;
  pageNumber: number;
  pageSize: number;
}

export const getLeaderboard = async (
  requestModel: GetLeaderboardRequestModel
): Promise<LeaderboardEntry[]> => {
  const response = await axiosPublic.get<UniversalResponse<LeaderboardEntry[]>>(
    `${relativeBasePath}`,
    {
      params: requestModel
    }
  );

  return response.data.value;
};
