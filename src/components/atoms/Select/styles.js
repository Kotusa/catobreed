import styled, { css } from 'styled-components';
import { Select } from 'antd';

import breakpoint from '@constants/media';

export const SelectContainer = styled(Select)`
  max-width: 130px;
  width: 100%;
  &.ant-select-focused:not(.ant-select-disabled)&:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${({ theme }) => theme.palette.accent};
    box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
    .ant-select-selection-item {
      color: ${({ theme }) => theme.palette.secondaryText};
    }
  }
  &:not(.ant-select-customize-input) .ant-select-selector {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.text};
    color: ${({ theme }) => theme.palette.text};
    box-shadow: 0px 0px 12px -2px transparent;
    &:hover {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
    }
  }
  .ant-select-arrow {
    svg {
      fill: ${({ theme }) => theme.palette.text};
    }
  }

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  @media ${breakpoint.sm} {
    max-width: 100%;
  }
`;

export const SelectOption = styled(Select.Option)``;
