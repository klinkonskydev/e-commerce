import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;

    border: 0;
    border-radius: 50px;
    background: none;
    outline: 0;

    color: ${theme.colors.primary};

    &:focus {
      filter: drop-shadow(5px 0px 0 ${theme.colors.primary});
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.colors.xgray};
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;

    border: 2px solid ${theme.colors.xblack};
    color: ${theme.colors.xblack};
    border-radius: 50px;
    background: none;

    &:disabled {
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      background: ${rgba(theme.colors.primary, 0.08)};
    }

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`
