import axios, { AxiosResponse } from 'axios';
import { ActionFunctionArgs, json } from 'react-router-dom';

import { authHttpClient } from '../../../../../httpClients';
import { ensure, setAccessToken } from '../../../../../utils';
import { AuthResponse, UniversalResponse } from '../../../../../types';

export const signInAction = async (args: ActionFunctionArgs): Promise<Response> => {
  const { request } = args;
  const data = await request.formData();

  const payload = {
    email: data.get('email')?.toString() ?? '',
    password: data.get('password')?.toString() ?? ''
  };

  let response: AxiosResponse<UniversalResponse<AuthResponse>> | null = null;
  try {
    response = await authHttpClient.signIn({ ...payload });
    if (response.data.value === null) {
      throw new Error('Could not receive access token from positive response!');
    }

    setAccessToken(response.data.value.accessToken);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
      return json(error.response?.data);
    }
  }

  return json(ensure(response).data.value);
};
