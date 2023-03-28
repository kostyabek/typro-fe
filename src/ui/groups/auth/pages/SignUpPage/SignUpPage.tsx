import { Box, InputLabel, List, ListItem } from '@mui/material';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { FailedFieldValidationResponse } from '../../../../../types';
import { AuthPages } from '../../../../../utils';
import { AppTextField, AppTextButton, AppLink } from '../../../../common';
import * as styles from './styles';

export const SignUpPage = (): JSX.Element => {
  const actionData = useActionData() as FailedFieldValidationResponse[];

  const navigation = useNavigation();

  const isEmailInvalid = actionData?.some((e) => e.metadata.field.toLowerCase() === 'email');
  const isPasswordInvalid = actionData?.some((e) => e.metadata.field.toLowerCase() === 'password');
  const isConfirmPasswordInvalid = actionData?.some(
    (e) => e.metadata.field.toLowerCase() === 'confirmpassword'
  );

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.formContainer}>
        <Form method="post">
          <Box sx={styles.formElementsContainer}>
            <Box sx={styles.fieldsContainer}>
              <InputLabel>E-mail</InputLabel>
              <AppTextField
                placeholder="john.doe@example.com"
                name="email"
                required
                error={isEmailInvalid}
              />
              <InputLabel>Password</InputLabel>
              <AppTextField
                placeholder="********************"
                type="password"
                name="password"
                required
                error={isPasswordInvalid}
              />
              <InputLabel>Repeat password</InputLabel>
              <AppTextField
                placeholder="********************"
                type="password"
                name="confirmPassword"
                required
                error={isConfirmPasswordInvalid}
              />
            </Box>
            <AppTextButton sx={styles.button} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up' : 'Sign up'}
            </AppTextButton>
            <Box sx={styles.linksContainer}>
              <AppLink to={`../${AuthPages.SignIn}`}>Already a member?</AppLink>
            </Box>
          </Box>
        </Form>
        <Box>
          <List>
            {actionData?.map((a) => (
              <ListItem key={a.message} sx={styles.validationError}>
                {a.message}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
