import React, { memo } from 'react';

import { Icon } from '@atoms';

import { CheckmarkContainer, CheckmarkLabel } from './styles';

const Checkmark = memo(({ label, checked }) => {
  const { name, className } = checked
    ? { name: 'check', className: 'icon-check' }
    : { name: 'cross', className: 'icon-cross' };

  return (
    <CheckmarkContainer>
      <CheckmarkLabel>{label}</CheckmarkLabel>
      <Icon name={name} className={className} />
    </CheckmarkContainer>
  );
});

export default Checkmark;
