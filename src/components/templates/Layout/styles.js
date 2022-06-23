import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';

import 'normalize.css';
import breakpoint from '@constants/media';

export const GlobalStyles = createGlobalStyle`
  html {
    --antd-wave-shadow-color: ${({ theme }) => theme.palette.accent};
  }

  body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary}, Helvetica, Arial, sans-serif;
    font-size: 18px;
    background: ${({ theme }) => theme.palette.body};
    color: ${({ theme }) => theme.palette.text};
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }

  .ant-select-dropdown {
    background-color: ${({ theme }) => theme.palette.secondary};
    border-radius: 2px;
    .ant-select-item  {
      color: ${({ theme }) => theme.palette.text};
      &:hover {
        background-color: ${({ theme }) => theme.palette.body};
      }
    }
    .ant-select-item-option-selected {
      background-color: ${({ theme }) => theme.palette.body};
    }
  }
`;

export const LayoutContainer = styled(Layout)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  &.ant-layout {
    background-color: transparent;
  }

  @media ${breakpoint.xs} {
    padding-top: 55px;
  }
`;
