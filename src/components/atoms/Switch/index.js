import React, { memo } from 'react';
import cn from 'classnames';

import { Icon } from '@atoms';

import { SwitchContainer } from './styles';

const Switch = memo(({ checkedIcon, unCheckedIcon, ...rest }) => {
  return (
    <SwitchContainer
      checkedChildren={<Icon name="night" className={cn('switchIcon')} />}
      unCheckedChildren={<Icon name="sun" className={cn('switchIcon')} />}
      {...rest}
    />
  );
});

export default Switch;
