import { useQuery } from '@tanstack/react-query';
import { useAxiosPrivate } from '../../../../../../../hooks';
import { userHttpClient } from '../../../../../../../httpClients';
import { UserInfoFragment } from './UserInfoFragment';
import { LoaderElement } from '../../../../../../common';

export const UserInfoContainer = (): JSX.Element => {
  const axiosPrivate = useAxiosPrivate();
  const { isLoading, data } = useQuery({
    queryKey: ['highLevelProfileInfo'],
    queryFn: async () => {
      return await userHttpClient.getHighLevelProfileInfo(axiosPrivate);
    }
  });

  return isLoading ? (
    <LoaderElement />
  ) : (
    <UserInfoFragment
      nickname={data?.nickname ?? ''}
      memberSince={data?.memberSince ?? new Date()}
      onEdit={() => console.log(1)}
      testsStarted={data?.testsStarted ?? 0}
      testsCompleted={data?.testsCompleted ?? 0}
    />
  );
};
