import React from 'react';

import { Loader } from '@atoms';

const loading = (isLoading, component, fallback = <Loader />) => {
  return isLoading ? fallback : component;
};

export default loading;
