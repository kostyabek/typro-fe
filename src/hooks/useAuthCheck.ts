import { getAccessToken } from '../utils';

export const useAuthCheck = (): boolean => {
  return getAccessToken() !== null;
};
