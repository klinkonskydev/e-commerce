import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Title = styled.span`
  position: relative;
  cursor: pointer;
`

export const Content = styled.menu`
  ${({ theme }) => css`
    position: absolute;
    left: -5rem;
    top: 30px;

    min-width: 25rem;
    padding: 1.6rem;

    border-radius: 8px;
    background: ${theme.colors.white};
    border: 1px solid ${rgba(theme.colors.primary, 0.7)};
    z-index: 1;

    transition: all 140ms;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      top: -15px;
      left: 0px;
      right: 0px;

      width: 100%;
      height: 2rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 20px;

      background: ${theme.colors.white};
      border-right: 1rem solid transparent;
      border-left: 1rem solid transparent;
      border-bottom: 1rem solid ${rgba(theme.colors.primary, 0.7)};
    }
  `}
`

type WrapperProps = { isOpen: boolean }
const wrapperModifiers = {
  isOpen: () => css`
    ${Content} {
      left: 0;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${isOpen && wrapperModifiers.isOpen()}
  `}
`
