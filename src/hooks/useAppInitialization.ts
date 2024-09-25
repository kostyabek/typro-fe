import { useQuery } from '@tanstack/react-query';

import {
  trainingConfigurationActions,
  useAppDispatch,
  useAppSelector,
  userActions
} from '../state';
import { trainingHttpClient, userHttpClient } from '../httpClients';
import { ensure, getAccessToken } from '../utils';

import { useAxiosPrivate } from './useAxiosPrivate';
import { useAbly } from './useAbly';

export const useAppInitialization = (): boolean => {
  const dispatch = useAppDispatch();
  const languagesInfo = useAppSelector((store) => store.data.trainingConfiguration.languagesInfo);
  const accessToken = getAccessToken();
  const axiosPrivate = useAxiosPrivate();

  const { isLoading: isLoadingSupportedLanguages } = useQuery({
    queryKey: ['supportedLanguages'],
    queryFn: async () => {
      const response = await trainingHttpClient.getSupportedLanguages();
      const supportedLanguages = response.value;
      dispatch(trainingConfigurationActions.setLanguages(supportedLanguages));
      return supportedLanguages;
    },
    enabled: languagesInfo.length === 0
  });

  const { isLoading: isLoadingUserInfo } = useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: async () => {
      const nickname = await userHttpClient.getNickname(axiosPrivate);
      useAbly(nickname);
      dispatch(userActions.setUserInfo({ nickname }));
      dispatch(userActions.setAccessToken(ensure(accessToken)));
      return nickname;
    },
    enabled: accessToken !== null
  });

  return !isLoadingSupportedLanguages && (!isLoadingUserInfo || accessToken === null);
};
