import { Pagination } from 'antd';
import styled from 'styled-components';

import breakpoint from '@constants/media';

export const PaginationContainer = styled(Pagination)`
  display: flex;
  flex-wrap: wrap;
  .ant-pagination-item {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.text};
    box-shadow: 0px 0px 7px -2px transparent;
    a {
      color: ${({ theme }) => theme.palette.text};
    }
    &:hover {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 7px -2px ${({ theme }) => theme.palette.accent};
      a {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
    &-active {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 7px -2px ${({ theme }) => theme.palette.accent};
      a {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }
  .ant-pagination-next,
  .ant-pagination-prev {
    button {
      background-color: transparent;
      border-color: ${({ theme }) => theme.palette.text};
      &:hover {
        border-color: ${({ theme }) => theme.palette.accent};
        box-shadow: 0px 0px 7px -2px ${({ theme }) => theme.palette.accent};
        .anticon svg {
          fill: ${({ theme }) => theme.palette.accent};
        }
      }
    }
    .anticon svg {
      fill: ${({ theme }) => theme.palette.text};
      transition: 0.3s;
    }
  }
  .ant-pagination-disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  .ant-pagination-item-ellipsis {
    color: ${({ theme }) => theme.palette.secondaryText} !important;
  }
  .ant-pagination-item-link-icon {
    color: ${({ theme }) => theme.palette.accent} !important;
  }
  @media ${breakpoint.sm} {
    gap: 6px;
  }
`;
