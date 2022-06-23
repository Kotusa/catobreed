import styled, { css } from 'styled-components';

import breakpoint from '@constants/media';

export const SvgContainer = styled.svg`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.palette.text};

  ${({ $transition }) =>
    $transition &&
    css`
      transition: all 0.2s;
    `}

  @media ${breakpoint.sm} {
    width: 35px;
    height: 35px;
  }
`;
