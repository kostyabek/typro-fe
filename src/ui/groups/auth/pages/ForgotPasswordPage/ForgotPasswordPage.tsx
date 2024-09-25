import { Box, InputLabel } from '@mui/material';

import { AuthPages } from '../../../../../utils';
import { AppTextField, AppTextButton, AppLink } from '../../../../common';

import * as styles from './styles';

export const ForgotPasswordPage = (): JSX.Element => (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.formContainer}>
        <form>
          <Box sx={styles.formElementsContainer}>
            <Box sx={styles.fieldsContainer}>
              <InputLabel>E-mail</InputLabel>
              <AppTextField placeholder="john.doe@example.com" />
            </Box>
            <AppTextButton sx={styles.button}>Send link</AppTextButton>
            <Box sx={styles.linksContainer}>
              <AppLink to={`../${AuthPages.SignUp}`}>Not a member?</AppLink>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
