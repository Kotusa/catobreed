import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import breakpoint from '@constants/media';

export const LogoTitle = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.text};
  text-decoration: none;
  transition: 0.2s;
  @media ${breakpoint.sm} {
    font-size: 16px;
  }
  @media ${breakpoint.xs} {
    display: none;
  }
`;

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  &:hover {
    ${LogoTitle} {
      color: ${({ theme }) => theme.palette.accent};
    }
    & .logoIcon {
      fill: ${({ theme }) => theme.palette.accent};
    }
  }
  @media ${breakpoint.sm} {
    padding: 10px 0;
  }
`;

export const LogoSubtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondaryText};
`;
