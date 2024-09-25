import { Axios, AxiosResponse } from 'axios';

import { UniversalResponse } from '../types/response';
import { AuthResponse } from '../types';

import { axiosPublic } from './axios';

const relativeBasePath = 'auth/';
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

interface SignInRequestModel {
  email: string;
  password: string;
}

interface SignUpRequestModel extends SignInRequestModel {
  confirmPassword: string;
}

export const signUp = async (
  requestModel: SignUpRequestModel
): Promise<AxiosResponse<UniversalResponse<AuthResponse>>> => await axiosPublic.post<UniversalResponse<AuthResponse>>(
    `${relativeBasePath}sign-up`,
    requestModel,
    {
      headers,
      withCredentials: true
    }
  );

export const signIn = async (
  requestModel: SignInRequestModel
): Promise<AxiosResponse<UniversalResponse<AuthResponse>>> => await axiosPublic.post<UniversalResponse<AuthResponse>>(
    `${relativeBasePath}sign-in`,
    requestModel,
    {
      headers,
      withCredentials: true
    }
  );

export const signOut = async (axios: Axios): Promise<AxiosResponse<void>> => await axios.post(`${relativeBasePath}sign-out`, {
    headers
  });
