import React, { memo } from 'react';

import { RateContainer, RateInner, RateLabel } from './styles';

const Rate = memo(({ label, ...rest }) => {
  return (
    <RateContainer>
      {label && <RateLabel>{label}</RateLabel>}
      <RateInner {...rest} />
    </RateContainer>
  );
});

export default Rate;
