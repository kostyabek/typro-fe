import { useQuery } from '@tanstack/react-query';
import { userHttpClient } from '../../../../../../../httpClients';
import { StatsByModeFragment } from './StatsByModeFragment';
import { useAxiosPrivate } from '../../../../../../../hooks';
import { LoaderElement } from '../../../../../../common';

export const StatsByModeContainer = (): JSX.Element => {
  const axiosPrivate = useAxiosPrivate();
  const { isLoading, data } = useQuery({
    queryKey: ['highLevelTrainingResults'],
    queryFn: async () => {
      return await userHttpClient.getHighLevelTrainingResults(axiosPrivate);
    }
  });

  return isLoading ? <LoaderElement /> : <StatsByModeFragment resultsInfo={data ?? []} />;
};
