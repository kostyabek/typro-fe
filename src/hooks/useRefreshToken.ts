import { axiosPublic } from '../httpClients';
import { UniversalResponse } from '../types';

interface RefreshTokenResponse {
  accessToken: string;
}

export const useRefreshToken = (): (() => Promise<string>) => {
  const refresh = async (): Promise<string> => {
    const response = await axiosPublic.post<UniversalResponse<RefreshTokenResponse>>(
      'auth/refresh-token'
    );

    return response.data.value?.accessToken ?? '';
  };

  return refresh;
};
