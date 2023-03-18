import axios from 'axios';
import { ActionFunctionArgs, json, redirect } from 'react-router-dom';
import { authHttpClient } from '../../../../../httpClients';
import { Groups } from '../../../../../utils';

export const signUpAction = async (args: ActionFunctionArgs): Promise<Response> => {
  const { request } = args;
  const data = await request.formData();

  const payload = {
    email: data.get('email')?.toString() ?? '',
    password: data.get('password')?.toString() ?? '',
    confirmPassword: data.get('confirmPassword')?.toString() ?? ''
  };

  try {
    const response = await authHttpClient.signUp({ ...payload });
    localStorage.setItem('typro-access-token', response.data.accessToken);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
      return json(error.response?.data);
    }
  }

  return redirect(Groups.Home);
};
