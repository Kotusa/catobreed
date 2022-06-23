import styled, { css } from 'styled-components';

import breakpoint from '@constants/media';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mainIcon {
    width: 150px;
    height: 150px;
    fill: ${({ theme }) => theme.palette.accent};
    animation: cat-reveal 0.5s ease-in-out;
    @keyframes cat-reveal {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @media ${breakpoint.sm} {
      width: 120px;
      height: 120px;
    }
  }

  @media ${breakpoint.sm} {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const WelcomeBlock = styled.div`
  width: ${({ $wide }) => $wide && `100%`};
  &:not(:last-child) {
    margin: 0px 0px 25px 0px;
  }
`;

export const WelcomeRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${`${$gap}px`};
      justify-content: center;
    `}
  ${({ $align }) =>
    $align &&
    css`
      align-items: center;
    `}
  a, .ant-btn {
    @media ${breakpoint.sm} {
      width: 100%;
    }
  }
  @media ${breakpoint.sm} {
    flex-direction: column;
    align-items: center;
    gap: ${({ $gap }) => $gap && '25px'};
  }
`;

export const WelcomeTitle = styled.h1`
  max-width: 300px;
  color: ${({ theme }) => theme.palette.text};
  font-size: 36px;
  line-height: 120%;
  font-weight: ${({ $fw }) => $fw};
  text-align: ${({ $center }) => $center && 'center'};
  margin: 0 auto;

  @media ${breakpoint.lg} {
    font-size: 32px;
  }
`;

export const WelcomeTitleHighlight = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.accent};
  font-size: 46px;
  text-align: center;

  @media ${breakpoint.lg} {
    font-size: 38px;
  }
`;

export const WelcomeText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.secondaryText};

  @media ${breakpoint.sm} {
    display: none;
  }
`;
