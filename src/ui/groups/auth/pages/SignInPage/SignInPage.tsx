import { Box, InputLabel, List, ListItem, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useActionData, Navigate, useNavigation } from 'react-router';
import { Form } from 'react-router-dom';
import { useAppDispatch, userActions } from '../../../../../state';
import { UniversalResponse } from '../../../../../types';
import { AuthPages, Groups } from '../../../../../utils';
import { AppLink, AppTextButton, AppTextField } from '../../../../common';
import { createStyles } from './styles';

export const SignInPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const actionData = useActionData();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  if (typeof actionData === 'boolean') {
    dispatch(userActions.setIsAuthenticated(true));
    return <Navigate to={Groups.Home} />;
  }

  const errorData = actionData as UniversalResponse<string>;

  const navigation = useNavigation();

  const isEmailInvalid = errorData?.reasons.some(
    (e) => e.metadata.field?.toLowerCase() === 'email'
  );
  const isPasswordInvalid = errorData?.reasons.some(
    (e) => e.metadata.field?.toLowerCase() === 'password'
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
            </Box>
            <AppTextButton sx={styles.button} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in' : 'Sign in'}
            </AppTextButton>
            <Box sx={styles.linksContainer}>
              <AppLink to={`../${AuthPages.SignUp}`}>Not a member?</AppLink>
              <AppLink to={`../${AuthPages.ForgotPassword}`}>Forgot password?</AppLink>
            </Box>
          </Box>
        </Form>
        <Box>
          <List>
            {errorData?.reasons.map((a) => (
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
