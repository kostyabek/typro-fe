import { AccessTokenBody } from '../types';
import jwt_decode from 'jwt-decode';

const accessTokenItemName = 'typro-access-token';

export const setAccessToken = (token: string): void => {
  localStorage.setItem(accessTokenItemName, token);
};

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem(accessTokenItemName);
  return token;
};

export const decodeAccessToken = (token: string): AccessTokenBody => {
  return jwt_decode(token);
};
