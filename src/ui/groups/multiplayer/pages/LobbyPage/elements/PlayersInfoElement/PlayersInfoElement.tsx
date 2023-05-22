import { Box, Typography } from '@mui/material';
import { PlayerInfo } from '../../../../../../../types';
import { StarIcon } from './icons';

interface Props {
  playersInfo: PlayerInfo[];
}

export const PlayersInfoElement = (props: Props): JSX.Element => {
  const peers = props.playersInfo.map((msg, index): JSX.Element => {
    return (
      <Typography key={index}>
        {msg.playerId}: {msg.percentageOfCompleteness}% {msg.isCreator && <StarIcon />}
      </Typography>
    );
  });

  return <Box>{peers}</Box>;
};
