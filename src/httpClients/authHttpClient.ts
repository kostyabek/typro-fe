import axios, { AxiosResponse } from 'axios';
import { configuration } from '../utils';

const relativeBasePath = 'auth/';
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

interface SignUpRequestModel {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpResponseModel {
  accessToken: string;
}

export const signUp = async (
  requestModel: SignUpRequestModel
): Promise<AxiosResponse<SignUpResponseModel>> => {
  return await axios.post<SignUpResponseModel>(
    `${configuration.serverUrl}${relativeBasePath}sign-up`,
    requestModel,
    {
      headers
    }
  );
};
