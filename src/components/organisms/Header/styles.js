import styled, { css } from 'styled-components';
import { Layout } from 'antd';

import breakpoint from '@constants/media';

export const HeaderContainer = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.ant-layout-header {
    padding: 0px 50px;
    background-color: ${({ theme }) => theme.palette.secondary};
    height: auto;
    line-height: initial;
    @media ${breakpoint.sm} {
      padding: 0 20px;
    }
  }

  @media ${breakpoint.xs} {
    width: 100%;
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media ${breakpoint.sm} {
    gap: 20px;
  }

  @media ${breakpoint.xs} {
    ${({ $mobileRevers }) =>
      $mobileRevers &&
      css`
        flex-direction: row-reverse;
      `}
  }
`;
