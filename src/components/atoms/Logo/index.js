import React, { memo } from 'react';
import cn from 'classnames';

import { ROUTES } from '@constants/routes';
import { Icon } from '@atoms';

import { LogoContainer, LogoSubtitle, LogoTitle } from './styles';

const Logo = memo(() => {
  return (
    <LogoContainer to={ROUTES.ROOT}>
      <Icon name="logo" className={cn('logoIcon')} $transition />
      <LogoTitle>
        Catobreed <LogoSubtitle>Find the cat you like!</LogoSubtitle>
      </LogoTitle>
    </LogoContainer>
  );
});

export default Logo;
