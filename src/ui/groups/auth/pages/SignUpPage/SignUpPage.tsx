import { Box, InputLabel } from '@mui/material';
import { AuthPages } from '../../../../../utils';
import { AppTextField, AppTextButton, AppLink } from '../../../../common';
import * as styles from './styles';

export const SignUpPage = (): JSX.Element => {
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
              <InputLabel>Repeat password</InputLabel>
              <AppTextField placeholder="********************" type="password" />
            </Box>
            <AppTextButton sx={styles.button}>Sign up</AppTextButton>
            <Box sx={styles.linksContainer}>
              <AppLink to={`../${AuthPages.SignIn}`}>Already a member?</AppLink>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
