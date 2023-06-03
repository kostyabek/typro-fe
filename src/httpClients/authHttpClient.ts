import { Axios, AxiosResponse } from 'axios';
import { UniversalResponse } from '../types/response';
import { axiosPublic } from './axios';
import { AuthResponse } from '../types';

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
): Promise<AxiosResponse<UniversalResponse<AuthResponse>>> => {
  return await axiosPublic.post<UniversalResponse<AuthResponse>>(
    `${relativeBasePath}sign-up`,
    requestModel,
    {
      headers,
      withCredentials: true
    }
  );
};

export const signIn = async (
  requestModel: SignInRequestModel
): Promise<AxiosResponse<UniversalResponse<AuthResponse>>> => {
  return await axiosPublic.post<UniversalResponse<AuthResponse>>(
    `${relativeBasePath}sign-in`,
    requestModel,
    {
      headers,
      withCredentials: true
    }
  );
};

export const signOut = async (axios: Axios): Promise<AxiosResponse<void>> => {
  return await axios.post(`${relativeBasePath}sign-out`, {
    headers
  });
};
