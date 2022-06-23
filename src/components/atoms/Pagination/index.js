import React, { memo } from 'react';

import { PaginationContainer } from './styles';

const Pagination = memo(({ total, ...rest }) => {
  return <PaginationContainer {...rest} total={total} hideOnSinglePage showSizeChanger={false} />;
});

export default Pagination;
