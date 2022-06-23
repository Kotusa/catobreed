import styled from 'styled-components';
import { Rate } from 'antd';

import breakpoint from '@constants/media';

export const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RateLabel = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.text};
  @media ${breakpoint.md} {
    font-size: 14px;
  }
`;

export const RateInner = styled(Rate)`
  .ant-rate-star-zero {
    svg {
      fill: ${({ theme }) => theme.palette.secondary};
    }
  }
  .ant-rate-star-full {
    svg {
      fill: ${({ theme }) => theme.palette.accent};
    }
  }
`;
