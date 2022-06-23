import styled from 'styled-components';

import breakpoint from '@constants/media';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col}, 1fr)` : 'repeat(2, 1fr)')};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '20px')};
  @media ${breakpoint.xlg} {
    grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col - 1}, 1fr)` : 'repeat(2, 1fr)')};
  }
  @media ${breakpoint.lg} {
    grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col - 2}, 1fr)` : 'repeat(2, 1fr)')};
  }
  @media ${breakpoint.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoint.xs} {
    grid-template-columns: 1fr;
  }
`;
