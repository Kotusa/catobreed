import React, { memo } from 'react';
import { Spin } from 'antd';

import { LoaderContainer, LoaderSpinner } from './styles';

const Loader = memo(() => {
  return (
    <LoaderContainer>
      <Spin indicator={<LoaderSpinner spin />} />
    </LoaderContainer>
  );
});

export default Loader;
