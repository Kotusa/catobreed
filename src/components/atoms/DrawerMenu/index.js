import React from 'react';

import { DrawerMenuContainer } from './styles';

const DrawerMenu = ({ children, ...rest }) => {
  return <DrawerMenuContainer {...rest}>{children}</DrawerMenuContainer>;
};

export default DrawerMenu;
