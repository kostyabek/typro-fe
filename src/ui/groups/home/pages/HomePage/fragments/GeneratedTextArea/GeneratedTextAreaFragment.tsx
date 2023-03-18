import { Box, Typography } from '@mui/material';
import * as styles from './styles';

interface Props {
  words: string[][];
}

export const GeneratedTextAreaFragment = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.wordsContainer}>
      {props.words.map((w, i) => (
        <Box key={`word_${i}`} sx={styles.word}>
          {w.map((c, i) => (
            <Typography key={`char_${i}`} sx={styles.letter}>
              {c}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};
