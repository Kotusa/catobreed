import React, { memo } from 'react';

import { SearchContainer } from './styles';

const Search = memo(({ ...rest }) => {
  return <SearchContainer {...rest} />;
});

export default Search;
