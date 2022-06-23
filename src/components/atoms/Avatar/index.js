import React, { memo } from 'react';
import cn from 'classnames';

import { Icon } from '@atoms';

import { AvatarContainer } from './styles';

const Avatar = memo(({ url, ...rest }) => {
  return <AvatarContainer className={cn('avatar')} src={url ?? <Icon name="logo" />} {...rest} />;
});

export default Avatar;
