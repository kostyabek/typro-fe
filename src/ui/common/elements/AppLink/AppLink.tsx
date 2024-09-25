import React from 'react';
import { Link as MuiLink, SxProps, useTheme } from '@mui/material';
import { NavLinkProps } from 'react-router-dom';

import { AppLinkBase } from './elements';

interface AppLinkProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

type Props = NavLinkProps & AppLinkProps;

// TODO: fix sx merging
export const AppLink = (props: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <MuiLink
      component={AppLinkBase}
      to={props.to}
      end={props.end}
      target={props.target}
      sx={{
        textDecoration: 'none',
        '&.active': {
          color: theme.palette.secondary.main
        },
        '&:hover': {
          color: theme.palette.secondary.main
        },
        transition: '0.2s ease-in-out',
        ...props.sx
      }}>
      {props.children}
    </MuiLink>
  );
};
