import { Box, InputLabel } from '@mui/material';
import { AuthPages } from '../../../../../utils';
import { AppLink, AppTextButton, AppTextField } from '../../../../common';
import * as styles from './styles';

export const SignInPage = (): JSX.Element => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.formContainer}>
        <form>
          <Box sx={styles.formElementsContainer}>
            <Box sx={styles.fieldsContainer}>
              <InputLabel>E-mail</InputLabel>
              <AppTextField placeholder="john.doe@example.com" />
              <InputLabel>Password</InputLabel>
              <AppTextField placeholder="********************" type="password" />
            </Box>
            <AppTextButton sx={styles.button}>Sign in</AppTextButton>
            <Box sx={styles.linksContainer}>
              <AppLink to={`../${AuthPages.SignUp}`}>Not a member?</AppLink>
              <AppLink to={`../${AuthPages.ForgotPassword}`}>Forgot password?</AppLink>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
