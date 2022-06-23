import styled from 'styled-components';

import breakpoint from '@constants/media';

export const DetailedInformationContainer = styled.div`
  max-width: 800px;
`;

export const DetailedInformationTitle = styled.h1`
  color: ${({ theme }) => theme.palette.text};
  font-size: 32px;
  margin: 0;
  @media ${breakpoint.md} {
    font-size: 26px;
  }
`;

export const DetailedInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media ${breakpoint.md} {
    font-size: 16px;
  }
`;

export const DetailedInformationDescription = styled.p`
  color: ${({ theme }) => theme.palette.text};
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DetailedInformationText = styled.span`
  color: ${({ $accent, theme }) => ($accent ? theme.palette.accent : theme.palette.secondaryText)};
  font-size: 16px;
  @media ${breakpoint.md} {
    font-size: 14px;
  }
`;

export const DetailedInformationGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col}, 1fr)` : 'repeat(2, 1fr)')};
  max-width: 650px;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '20px')};
  margin: 0px 0px 30px 0px;
  @media ${breakpoint.md} {
    grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col - 1}, 1fr)` : 'repeat(2, 1fr)')};
  }
  @media ${breakpoint.xs} {
    grid-template-columns: ${({ $col }) => ($col ? `repeat(${$col - 2}, 1fr)` : 'repeat(2, 1fr)')};
  }
`;

export const DetailedInformationBold = styled.span`
  font-weight: 700;
`;

export const DetailedInformationDash = styled.div`
  height: 1px;
  width: 600px;
  background-color: ${({ theme }) => theme.palette.secondaryText};
  margin: 20px 0;
  opacity: 0.3;
  @media ${breakpoint.xl} {
    width: 100%;
  }
`;

export const DetailedInformationLink = styled.a`
  position: relative;
  width: max-content;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.text};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.palette.text};
    &::after {
      width: 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.text};
    transition: 0.2s;
  }
  @media ${breakpoint.md} {
    font-size: 14px;
  }
`;
