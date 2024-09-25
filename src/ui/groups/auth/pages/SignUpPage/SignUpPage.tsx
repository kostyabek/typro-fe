import { Box, InputLabel, List, ListItem, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { Form, Navigate, useActionData, useNavigation } from 'react-router-dom';

import { useAppDispatch, userActions } from '../../../../../state';
import { AuthResponse, UniversalResponse } from '../../../../../types';
import { AuthPages, Groups, ensure, getAccessToken } from '../../../../../utils';
import { AppLink, AppTextButton, AppTextField } from '../../../../common';

import { createStyles } from './styles';

// TODO: Fix useAbly conditional usage

export const SignUpPage = (): JSX.Element => {
  const actionData = useActionData() as object;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  if (
    actionData !== undefined &&
    actionData !== null &&
    Object.keys(actionData).some((e) => e === 'nickname')
  ) {
    const userData = actionData as AuthResponse;
    dispatch(userActions.setAccessToken(ensure(getAccessToken())));
    dispatch(userActions.setUserInfo({ nickname: userData.nickname }));
    // useAbly(userData.nickname);
    return <Navigate to={Groups.Home} />;
  }

  const errorData = actionData as UniversalResponse<string>;

  const isEmailInvalid = errorData?.reasons.some(
    (e) => e.metadata.field?.toLowerCase() === 'email'
  );
  const isPasswordInvalid = errorData?.reasons.some(
    (e) => e.metadata.field?.toLowerCase() === 'password'
  );
  const isConfirmPasswordInvalid = errorData?.reasons.some(
    (e) => e.metadata.field?.toLowerCase() === 'confirmpassword'
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
