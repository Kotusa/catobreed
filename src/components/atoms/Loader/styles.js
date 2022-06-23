import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 100%;
  width: 100%;
  height: 100%;
`;
export const LoaderSpinner = styled(LoadingOutlined)`
  svg {
    fill: ${({ theme }) => theme.palette.accent};
  }
`;
