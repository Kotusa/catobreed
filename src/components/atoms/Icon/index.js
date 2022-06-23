import React, { memo } from 'react';
import cn from 'classnames';

import sprite from '@assets/icons/sprite.svg';

import { SvgContainer } from './styles';

const Icon = memo(({ name, className, ...rest }) => {
  return (
    <SvgContainer className={cn([className, 'icon'])} {...rest}>
      <use xlinkHref={`${sprite}#${name}`} />
    </SvgContainer>
  );
});

export default Icon;
