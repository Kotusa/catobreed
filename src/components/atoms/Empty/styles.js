import styled from 'styled-components';
import { Empty } from 'antd';

export const EmptyContainer = styled(Empty)`
  .icon {
    width: 100px;
    height: 100px;
  }
  .ant-empty-description {
    color: ${({ theme }) => theme.palette.text};
  }
`;
