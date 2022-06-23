import styled from 'styled-components';
import { Input } from 'antd';

export const SearchContainer = styled(Input.Search)`
  .ant-input {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.border};
    color: ${({ theme }) => theme.palette.text};
    box-shadow: 0px 0px 12px -2px transparent;
    &:hover {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
    }
    &:focus {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
    }
    &::placeholder {
      color: ${({ theme }) => theme.palette.secondaryText};
    }
  }
  .ant-input-group-addon {
    background-color: transparent;
  }
  .ant-btn {
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.border};
    box-shadow: 0px 0px 12px -2px transparent;
    svg {
      fill: ${({ theme }) => theme.palette.text};
      transition: 0.3s;
    }
    &:hover {
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
      svg {
        fill: ${({ theme }) => theme.palette.accent};
      }
    }
  }
  .ant-input:focus + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary),
  .ant-input:hover + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary) {
    border-left-color: ${({ theme }) => theme.palette.accent};
  }
`;
