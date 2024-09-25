import jwt_decode from 'jwt-decode';

import { AccessTokenBody } from '../types';

const accessTokenItemName = 'typro-access-token';

export const setAccessToken = (token: string): void => {
  localStorage.setItem(accessTokenItemName, token);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem(accessTokenItemName);
};

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem(accessTokenItemName);
  return token;
};

export const decodeAccessToken = (token: string): AccessTokenBody => jwt_decode(token);

export const isUserAuthenticated = (): boolean => getAccessToken() !== null;
