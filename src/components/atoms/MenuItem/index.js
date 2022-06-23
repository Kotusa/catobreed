import React, { memo } from 'react';

import { MenuItemContainer } from './styles';

const MenuItem = memo(({ children, href, ...rest }) => {
  return (
    <MenuItemContainer to={href} {...rest}>
      {children}
    </MenuItemContainer>
  );
});

export default MenuItem;
