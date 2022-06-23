import { Button } from 'antd';
import styled, { css } from 'styled-components';

export const ButtonContainer = styled(Button)`
  &:is(a) {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text};
    padding: 4px 15px;
    text-align: center;
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.palette.text};
    box-shadow: 0px 0px 12px -2px transparent;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:is(a),
  &.ant-btn {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text};
    border-color: ${({ theme }) => theme.palette.text};
    box-shadow: 0px 0px 12px -2px transparent;
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.palette.accent};
      border-color: ${({ theme }) => theme.palette.accent};
      box-shadow: 0px 0px 12px -2px ${({ theme }) => theme.palette.accent};
    }
  }

  ${({ $accent }) =>
    $accent &&
    css`
      &.button {
        background-color: ${({ theme }) => theme.palette.accent};
        border-color: ${({ theme }) => theme.palette.accent};
        color: #fff;
      }
    `}
`;
