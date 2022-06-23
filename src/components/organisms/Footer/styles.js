import { Layout } from 'antd';
import styled from 'styled-components';

import breakpoint from '@constants/media';

export const FooterContainer = styled(Layout.Footer)`
  &.ant-layout-footer {
    display: flex;
    padding: 20px 50px;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.secondary};
    @media ${breakpoint.sm} {
      padding: 10px 20px;
    }
  }
`;

export const FooterReferenceText = styled.span`
  color: ${({ theme }) => theme.palette.secondaryText};
  font-size: 18px;

  @media ${breakpoint.sm} {
    font-size: 16px;
  }
`;

export const FooterLink = styled.a`
  text-underline-offset: 3px;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
