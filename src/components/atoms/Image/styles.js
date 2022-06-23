import { Image } from 'antd';
import styled from 'styled-components';

import breakpoint from '@constants/media';

export const ImageContainer = styled(Image)`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  @media ${breakpoint.xlg} {
    height: 250px;
  }
`;
