import { Box, Typography } from '@mui/material';

import { PlayerInfo } from '../../../../../../../types';
import { LinearProgressWithLabel } from '../../../../../../common';

import { StarIcon } from './icons';
import * as styles from './styles';

interface Props {
  playersInfo: PlayerInfo[];
  isWordsMode: boolean;
}

export const PlayersInfoElement = (props: Props): JSX.Element => {
  const peers = props.playersInfo.map((msg, index): JSX.Element => {
    const progressElement = props.isWordsMode ? (
      <LinearProgressWithLabel value={msg.indicatorValue} />
    ) : (
      <Typography>{msg.indicatorValue.toFixed(0)}%</Typography>
    );

    return (
      <Box key={`${msg.playerId}${index}`} sx={styles.mainContainer}>
        <Typography>
          {msg.playerId} {msg.isCreator && <StarIcon />}
        </Typography>
        {progressElement}
      </Box>
    );
  });

  return <Box>{peers}</Box>;
};
