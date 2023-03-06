import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface AppLinkBaseProps {
  children: React.ReactNode;
}

type Props = NavLinkProps & AppLinkBaseProps;

const AppLinkBase = React.forwardRef<HTMLAnchorElement, Props>((props: Props, ref) => (
  <NavLink ref={ref} {...props}>
    {props.children}
  </NavLink>
));

AppLinkBase.displayName = 'AppLinkBase';
export { AppLinkBase };
