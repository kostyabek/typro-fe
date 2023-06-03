import React from 'react';
import { AuthPages, Groups, getAccessToken } from '../../utils';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export const Protected = (props: Props): JSX.Element => {
  if (getAccessToken() === null) {
    return <Navigate to={`${Groups.Auth}/${AuthPages.SignIn}`} replace />;
  }

  return props.children;
};
