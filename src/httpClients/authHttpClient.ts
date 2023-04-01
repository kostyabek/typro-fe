import { AxiosResponse } from 'axios';
import { UniversalResponse } from '../types/response';
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

interface AuthResponseValue {
  accessToken: string;
  eMail: string;
}

export const signUp = async (
  requestModel: SignUpRequestModel
): Promise<AxiosResponse<UniversalResponse<AuthResponseValue>>> => {
  return await axiosPublic.post<UniversalResponse<AuthResponseValue>>(
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
): Promise<AxiosResponse<UniversalResponse<AuthResponseValue>>> => {
  return await axiosPublic.post<UniversalResponse<AuthResponseValue>>(
    `${relativeBasePath}sign-in`,
    requestModel,
    {
      headers,
      withCredentials: true
    }
  );
};
