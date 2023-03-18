import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { RestartContext } from '../../../../../../../contexts';
import { trainingHttpClient } from '../../../../../../../httpClients';
import { useAppSelector } from '../../../../../../../state';
import { GeneratedTextAreaFragment } from './GeneratedTextAreaFragment';

export const GeneratedTextAreaContainer = (): JSX.Element => {
  const { isRestartScheduled, setRestartScheduledStatus } = useContext(RestartContext);
  const trainingConfiguration = useAppSelector((store) => store.data.training);

  const queryResult = useQuery({
    queryKey: ['generatedText'],
    queryFn: async () => {
      const data = await trainingHttpClient.getGeneratedText({
        ...trainingConfiguration,
        languageId: trainingConfiguration.languageInfo.id
      });
      setRestartScheduledStatus(false);

      return data;
    },
    enabled: isRestartScheduled
  });

  const generatedText = queryResult.data?.value ?? [];

  return <GeneratedTextAreaFragment words={generatedText} />;
};
