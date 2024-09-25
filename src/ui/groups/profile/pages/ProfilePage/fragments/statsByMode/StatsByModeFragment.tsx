import { Box, useTheme } from '@mui/material';

import {
  HighLevelTrainingResultDto,
  TimeModeType,
  WordsModeType
} from '../../../../../../../types';

import { ModeInfoElement } from './elements';
import { createStyles } from './styles';

interface Props {
  resultsInfo: HighLevelTrainingResultDto[];
}

export const StatsByModeFragment = (props: Props): JSX.Element => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const fifteenSeconds = props.resultsInfo.find(
    (e) => e.timeModeType === TimeModeType.FifteenSeconds
  );
  const thirtySeconds = props.resultsInfo.find(
    (e) => e.timeModeType === TimeModeType.ThirtySeconds
  );
  const oneMinute = props.resultsInfo.find((e) => e.timeModeType === TimeModeType.OneMinute);
  const twoMinutes = props.resultsInfo.find((e) => e.timeModeType === TimeModeType.TwoMinutes);

  const tenWords = props.resultsInfo.find((e) => e.wordsModeType === WordsModeType.TenWords);
  const twentyFiveWords = props.resultsInfo.find(
    (e) => e.wordsModeType === WordsModeType.TwentyFiveWords
  );
  const fiftyWords = props.resultsInfo.find((e) => e.wordsModeType === WordsModeType.FiftyWords);
  const hundredWords = props.resultsInfo.find(
    (e) => e.wordsModeType === WordsModeType.OneHundredWords
  );

  return (
    <Box sx={styles.mainContainer}>
      <ModeInfoElement
        wordsPerMinute={fifteenSeconds?.wordsPerMinute}
        accuracy={fifteenSeconds?.accuracy}
        mode="15 seconds"
      />
      <ModeInfoElement
        wordsPerMinute={thirtySeconds?.wordsPerMinute}
        accuracy={thirtySeconds?.accuracy}
        mode="30 seconds"
      />
      <ModeInfoElement
        wordsPerMinute={oneMinute?.wordsPerMinute}
        accuracy={oneMinute?.accuracy}
        mode="60 seconds"
      />
      <ModeInfoElement
        wordsPerMinute={twoMinutes?.wordsPerMinute}
        accuracy={twoMinutes?.accuracy}
        mode="120 seconds"
      />
      <Box sx={styles.divider} />
      <ModeInfoElement
        wordsPerMinute={tenWords?.wordsPerMinute}
        accuracy={tenWords?.accuracy}
        mode="10 words"
      />
      <ModeInfoElement
        wordsPerMinute={twentyFiveWords?.wordsPerMinute}
        accuracy={twentyFiveWords?.accuracy}
        mode="25 words"
      />
      <ModeInfoElement
        wordsPerMinute={fiftyWords?.wordsPerMinute}
        accuracy={fiftyWords?.accuracy}
        mode="50 words"
      />
      <ModeInfoElement
        wordsPerMinute={hundredWords?.wordsPerMinute}
        accuracy={hundredWords?.accuracy}
        mode="100 words"
      />
    </Box>
  );
};
