import React from 'react';

import { GridContainer } from './styles';

const Grid = ({ children, ...rest }) => {
  return <GridContainer {...rest}>{children}</GridContainer>;
};

export default Grid;
