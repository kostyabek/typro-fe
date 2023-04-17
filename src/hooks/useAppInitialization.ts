import { trainingConfigurationActions, useAppDispatch, useAppSelector } from '../state';
import { trainingHttpClient } from '../httpClients';
import { useQuery } from '@tanstack/react-query';

export const useAppInitialization = (): boolean => {
  const dispatch = useAppDispatch();
  const languagesInfo = useAppSelector((store) => store.data.trainingConfiguration.languagesInfo);

  const { isLoading } = useQuery({
    queryKey: ['supportedLanguages'],
    queryFn: async () => {
      const response = await trainingHttpClient.getSupportedLanguages();
      const data = response.value;
      dispatch(trainingConfigurationActions.setLanguages(data));

      return data;
    },
    enabled: languagesInfo.length === 0
  });

  return !isLoading;
};
