import { Box, Typography } from '@mui/material';
import * as styles from './styles';

export const AboutPage = (): JSX.Element => {
  return (
    <Box>
      <Typography component={'h1'} sx={styles.header}>
        typro
      </Typography>
      <Typography sx={styles.plain}>A simple yet functional typing test</Typography>
      <Typography sx={styles.plain}>&#x1F603;</Typography>
    </Box>
  );
};
