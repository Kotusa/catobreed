import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  .menuIcon {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.palette.text};
    flex-shrink: 0;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;
