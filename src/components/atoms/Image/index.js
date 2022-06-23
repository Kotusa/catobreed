import React, { memo } from 'react';

import { ImageContainer } from './styles';

const Image = memo(({ src, ...rest }) => {
  return <ImageContainer src={src} {...rest} />;
});

export default Image;
