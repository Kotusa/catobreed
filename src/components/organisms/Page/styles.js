import styled, { css } from 'styled-components';
import { PageHeader as AntPageHeader } from 'antd';

import breakpoint from '@constants/media';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${({ $column }) => $column && 'column'};
  height: 100%;
  padding: 50px;
  flex: 100%;
  ${({ $center }) =>
    $center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  @media ${breakpoint.sm} {
    padding: 20px;
  }
`;

export const PageBlock = styled.div`
  align-self: ${({ $center }) => $center && 'center'};
  &:not(:last-child) {
    margin-right: ${({ $margin }) => ($margin ? `${$margin}px` : '30px')};
    ${({ $column }) =>
      $column &&
      css`
        margin-right: 0;
        margin-bottom: ${({ $margin }) => ($margin ? `${$margin}px` : '30px')};
      `}

    ${({ $gap }) =>
      $gap &&
      css`
        display: flex;
        gap: ${`${$gap}px`};
      `}
    ${({ $noMargin }) =>
      $noMargin &&
      css`
        margin: 0px;
      `}
  }
  @media ${breakpoint.sm} {
    ${({ $column }) =>
      $column &&
      css`
        display: flex;
        flex-direction: column;
      `}
  }
`;

export const PageBlockHead = styled.div``;

export const PageBlockItem = styled.div`
  ${({ $fixedWidth }) =>
    $fixedWidth &&
    css`
      width: 100%;
      max-width: 220px;

      @media ${breakpoint.sm} {
        max-width: 100%;
      }
    `};
`;

export const PageBlockInner = styled.div`
  ${({ $row }) =>
    $row &&
    css`
      display: flex;
      align-items: center;
      gap: 15px;
    `}

  @media ${breakpoint.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PageBlockLabel = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.palette.secondaryText};
  margin-bottom: 5px;
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 750px 1fr;
  gap: 50px;
  @media ${breakpoint.xl} {
    grid-template-columns: 1fr;
  }
  @media ${breakpoint.md} {
    gap: 30px;
  }
`;

export const PageHeaderContainer = styled(AntPageHeader)`
  padding: 0;
  .ant-page-header-heading {
    @media ${breakpoint.xs} {
      flex-direction: column;
    }
  }
  .ant-page-header-heading-title {
    color: ${({ theme }) => theme.palette.text};
  }
  .ant-page-header-heading-sub-title {
    color: ${({ theme }) => theme.palette.secondaryText};
    @media ${breakpoint.xs} {
      display: none;
    }
  }
  .ant-page-header-back-button {
    .anticon svg {
      fill: ${({ theme }) => theme.palette.text};
      transition: 0.2s;
    }
    &:hover {
      .anticon svg {
        fill: ${({ theme }) => theme.palette.accent};
      }
    }
  }
  .ant-input-search {
    width: 500px;
    @media ${breakpoint.md} {
      width: 100%;
    }
  }
  .ant-space-item,
  .ant-space {
    @media ${breakpoint.xs} {
      width: 100%;
    }
  }
`;
