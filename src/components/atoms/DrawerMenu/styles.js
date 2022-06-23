import styled from 'styled-components';
import { Drawer } from 'antd';

export const DrawerMenuContainer = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
  .ant-drawer-content-wrapper {
    width: 100% !important;
  }
  .ant-drawer-header {
    background-color: ${({ theme }) => theme.palette.secondary};
    padding: 16px 20px 0 20px;
  }
  .ant-drawer-header-title {
    justify-content: flex-end;
  }
  .ant-drawer-close {
    margin: 0;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
`;
