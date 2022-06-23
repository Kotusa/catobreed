import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';

export const DropdownContainer = styled(Dropdown)`
  background-color: ${({ theme }) => theme.palette.secondary};
`;

export const DropdownMenu = styled(Menu)`
  width: calc(100% + 1px);
  max-height: 140px;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: 2px;
  .ant-dropdown-menu-item {
    color: ${({ theme }) => theme.palette.text};
    &:hover {
      background-color: ${({ theme }) => theme.palette.body};
    }
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.secondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.secondaryText};
    border-radius: 4px;
  }
`;

export const DropdownPlaceholder = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary};
  padding: 15px;
  .ant-empty-image {
    height: max-content;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
`;
