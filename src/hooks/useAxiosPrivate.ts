import { axiosPrivate } from '../httpClients';
import { useEffect } from 'react';
import { useRefreshToken } from './useRefreshToken';
import { Axios, AxiosError } from 'axios';
import { getAccessToken } from '../utils';

export const useAxiosPrivate = (): Axios => {
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (config.headers.Authorization === undefined) {
          config.headers.Authorization = `Bearer ${getAccessToken() ?? ''}`;
        }

        return config;
      },
      async (error) => await Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const previousRequest = error?.config;
        if (error?.response?.status === 401 && previousRequest !== undefined) {
          const newAccessToken = await refresh();
          previousRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return await axiosPrivate(previousRequest);
        }

        return await Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [getAccessToken, refresh]);

  return axiosPrivate;
};
