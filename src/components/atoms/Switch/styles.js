import { Switch } from 'antd';
import styled from 'styled-components';

import breakpoint from '@constants/media';

export const SwitchContainer = styled(Switch)`
  &.ant-switch {
    min-width: 70px;
    height: 30px;
    background-image: none;
    background-color: ${({ theme }) => theme.palette.body};
    @media ${breakpoint.sm} {
      height: 23px;
      min-width: 45px;
    }
  }
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.palette.accent};
    .switchIcon {
      fill: #fff;
    }
    .ant-switch-inner {
      justify-content: flex-start;
    }
    .ant-switch-handle {
      left: calc(100% - 18px - 6px);
      &::before {
        background-color: #fff;
      }
      @media ${breakpoint.sm} {
        left: calc(100% - 18px - 2px);
      }
    }
  }
  .switchIcon {
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.palette.accent};
    @media ${breakpoint.sm} {
      width: 12px;
      height: 12px;
    }
  }
  .ant-switch-inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 0px 0px 0px 3px;
    @media ${breakpoint.sm} {
      padding: 0;
    }
  }
  .ant-switch-handle {
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
    &::before {
      background-color: ${({ theme }) => theme.palette.accent};
    }
    @media ${breakpoint.sm} {
      top: 2px;
      left: 2px;
      transform: none;
    }
  }
`;
