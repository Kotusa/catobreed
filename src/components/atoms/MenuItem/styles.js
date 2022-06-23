import styled from 'styled-components';
import { Link } from 'react-router-dom';

import breakpoint from '@constants/media';

export const MenuItemContainer = styled(Link)`
  padding: 28px 0;
  color: ${({ theme }) => theme.palette.text};
  &:not(:last-child) {
    display: block;
    margin-right: 25px;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.accent};
  }
  @media ${breakpoint.lg} {
    font-size: 16px;
    padding: 18px 0;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media ${breakpoint.xs} {
    font-size: 20px;
    padding: 10px 0;
    &:not(:last-child) {
      margin-right: 0px;
    }
  }
`;
