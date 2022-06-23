import React, { memo } from 'react';

import { SelectContainer, SelectOption } from './styles';

const Select = memo(({ children, ...rest }) => {
  return <SelectContainer {...rest}>{children}</SelectContainer>;
});

Select.Option = SelectOption;

export default Select;
