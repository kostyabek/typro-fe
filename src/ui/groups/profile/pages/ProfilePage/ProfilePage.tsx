import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../../../../state';
import { Navigate } from 'react-router-dom';
import { AuthPages, Groups } from '../../../../../utils';

export const ProfilePage = (): JSX.Element => {
  const isAuthenticated = useAppSelector((store) => store.data.user.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={`${Groups.Auth}/${AuthPages.SignIn}`} />;
  }
  return (
    <Box>
      <Typography>Profile Page</Typography>
    </Box>
  );
};
