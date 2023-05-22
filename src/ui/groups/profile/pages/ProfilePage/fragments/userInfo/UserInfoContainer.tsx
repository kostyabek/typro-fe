import { useQuery } from '@tanstack/react-query';
import { useAxiosPrivate } from '../../../../../../../hooks';
import { userHttpClient } from '../../../../../../../httpClients';
import { UserInfoFragment } from './UserInfoFragment';
import { LoaderElement } from '../../../../../../common';
import { useState } from 'react';
import { useAppDispatch, userActions } from '../../../../../../../state';

export const UserInfoContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isReloadRequired, setIsReloadRequired] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  const { isLoading, data } = useQuery({
    queryKey: ['highLevelProfileInfo'],
    queryFn: async () => {
      const data = await userHttpClient.getHighLevelProfileInfo(axiosPrivate);
      setIsReloadRequired(false);
      return data;
    },
    enabled: isReloadRequired
  });

  const saveInfoHandler = (nickname: string): void => {
    void userHttpClient.updateNickname(axiosPrivate, nickname).then(() => {
      dispatch(userActions.setUserInfo({ nickname }));
      setIsReloadRequired(true);
    });
  };

  return isLoading ? (
    <LoaderElement />
  ) : (
    <UserInfoFragment
      nickname={data?.nickname ?? ''}
      memberSince={data?.memberSince ?? new Date()}
      onSaveInfo={saveInfoHandler}
      testsStarted={data?.testsStarted ?? 0}
      testsCompleted={data?.testsCompleted ?? 0}
    />
  );
};
