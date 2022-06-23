import styled from 'styled-components';

import breakpoint from '@constants/media';

export const CheckmarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .icon {
    width: 10px;
    height: 10px;
  }
  .icon-check {
    fill: ${({ theme }) => theme.palette.success};
    width: 15px;
    height: 15px;
  }
  .icon-cross {
    fill: ${({ theme }) => theme.palette.error};
  }
`;

export const CheckmarkLabel = styled.span`
  color: ${({ theme }) => theme.palette.text};
  font-size: 16px;
  @media ${breakpoint.md} {
    font-size: 14px;
  }
`;
