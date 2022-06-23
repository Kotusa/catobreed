import React, { useState } from 'react';
import cn from 'classnames';

import { DrawerMenu, Icon, MenuItem } from '@atoms';
import { useWindowDimensions } from '@hooks/useWindowDimensions';
import useBodyScrollLock from '@hooks/useBodyScrollLock';

import { MenuButton, MenuContainer, MenuList } from './styles';

const Menu = ({ items }) => {
  const { isMobile } = useWindowDimensions();

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  const handleMenuOpen = () => {
    setIsMenuOpened(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpened(false);
  };

  if (isMobile) {
    return (
      <MenuContainer>
        <MenuButton onClick={handleMenuOpen}>
          <Icon name="pawprint" className={cn('menuIcon')} />
        </MenuButton>
        <DrawerMenu
          closeIcon={<Icon name="cross" className={cn('menuIconClose')} />}
          placement="right"
          onClose={handleMenuClose}
          visible={isMenuOpened}
        >
          <MenuList>
            {items.map(({ name, href }) => (
              <MenuItem onClick={handleMenuClose} key={name} href={href}>
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </DrawerMenu>
      </MenuContainer>
    );
  }

  return (
    <MenuContainer>
      {items.map(({ name, href }) => (
        <MenuItem key={name} href={href}>
          {name}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
