import { useQuery } from '@tanstack/react-query';

import { userHttpClient } from '../../../../../../../httpClients';
import { useAxiosPrivate } from '../../../../../../../hooks';
import { LoaderElement } from '../../../../../../common';

import { StatsByModeFragment } from './StatsByModeFragment';

export const StatsByModeContainer = (): JSX.Element => {
  const axiosPrivate = useAxiosPrivate();
  const { isLoading, data } = useQuery({
    queryKey: ['highLevelTrainingResults'],
    queryFn: async () => await userHttpClient.getHighLevelTrainingResults(axiosPrivate)
  });

  return isLoading ? <LoaderElement /> : <StatsByModeFragment resultsInfo={data ?? []} />;
};
