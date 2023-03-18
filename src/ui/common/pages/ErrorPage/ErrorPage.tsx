import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router';
import { ActionError } from '../../../../types';
import { FooterContainer, HeaderContainer } from '../../fragments';
import * as styles from './styles';

export const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as ActionError;

  let title = 'An error occurred!';
  let message = 'Something went wrong.';

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.contentContainer}>
        <HeaderContainer />
        <Box sx={styles.errorContainer}>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.message}>{message}</Typography>
        </Box>
        <FooterContainer />
      </Box>
    </Box>
  );
};
