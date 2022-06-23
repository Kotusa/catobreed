import React, { Fragment, memo } from 'react';

import { EmptyContainer } from './styles';

const Empty = memo(({ description, children, ...rest }) => {
  return (
    <Fragment>
      <EmptyContainer description={description} {...rest}>
        {children}
      </EmptyContainer>
    </Fragment>
  );
});

export default Empty;
