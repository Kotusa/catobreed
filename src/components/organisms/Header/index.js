import React, { useCallback } from 'react';

import { Logo, Switch } from '@atoms';
import { Menu } from '@molecules';
import { useApplicationTheme } from '@hooks/useApplicationTheme';
import { MENU_ITEMS } from '@constants/types/menu';
import { THEMES } from '@constants/types/themes';

import { HeaderContainer, HeaderItem } from './styles';

const Header = () => {
  const { selectedTheme, updateApplicationTheme } = useApplicationTheme();

  const handleSwitchChange = useCallback(
    (checked) => {
      if (checked) {
        updateApplicationTheme(THEMES.DARK.NAME);
      } else {
        updateApplicationTheme(THEMES.LIGHT.NAME);
      }
    },
    [updateApplicationTheme],
  );

  return (
    <HeaderContainer>
      <Header.Item>
        <Logo />
      </Header.Item>
      <Header.Item $mobileRevers>
        <Menu items={MENU_ITEMS} />
        <Switch onChange={handleSwitchChange} defaultChecked={selectedTheme === THEMES.DARK.NAME} />
      </Header.Item>
    </HeaderContainer>
  );
};

Header.Item = HeaderItem;

export default Header;
