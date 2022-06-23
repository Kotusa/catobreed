import styled, { css } from 'styled-components';

import breakpoint from '@constants/media';

export const CardTitle = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.palette.text};
  position: relative;
  margin: 0px 0px 15px 0px;
  transition: 0.2s;

  &::after {
    content: '';
    width: 40px;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: ${({ theme }) => theme.palette.border};
    opacity: 0.5;
    @media ${breakpoint.sm} {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${breakpoint.sm} {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.card};

  &:is(a) {
    &:hover {
      ${CardTitle} {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }

  @media ${breakpoint.sm} {
    padding: 12px;
  }
  @media ${breakpoint.xxs} {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const CardBlock = styled.div`
  ${({ $row }) =>
    $row &&
    css`
      display: flex;
      gap: 20px;
    `}

  .cardIcon {
    width: 35px;
    height: 35px;
    transition: 0.2s;
    &:hover {
      fill: ${({ theme }) => theme.palette.accent};
    }
  }
  @media ${breakpoint.xxs} {
    text-align: center;
  }
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${breakpoint.xxs} {
    justify-content: center;
  }
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
`;

export const CardDescriptionTitle = styled.span`
  font-size: 14px;
  opacity: 0.7;
  color: ${({ theme }) => theme.palette.text};
  @media ${breakpoint.sm} {
    font-size: 12px;
  }
`;
export const CardDescriptionContent = styled.p`
  color: ${({ theme }) => theme.palette.text};
  @media ${breakpoint.sm} {
    font-size: 14px;
  }
`;

export const CardLink = styled.a``;
