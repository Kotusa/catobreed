import styled from 'styled-components';
import { Avatar } from 'antd';

import breakpoint from '@constants/media';

export const AvatarContainer = styled(Avatar)`
  flex-shrink: 0;
  &.avatar {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${breakpoint.sm} {
      width: 80px;
      height: 80px;
    }
  }
  .icon {
    width: 70px;
    height: 70px;
  }
`;
