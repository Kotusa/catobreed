import styled, { css } from 'styled-components';

export const InformationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InformationTitle = styled.span`
  color: ${({ theme }) => theme.palette.secondaryText};
  font-size: 32px;
  font-weight: 700;
  ${({ $large }) =>
    $large &&
    css`
      font-size: 110px;
      line-height: 100px;
      /* opacity: 0.7; */
    `};
`;

export const InformationIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  .icon {
    width: 180px;
    height: 180px;
    fill: ${({ theme }) => theme.palette.secondary};
  }
`;
