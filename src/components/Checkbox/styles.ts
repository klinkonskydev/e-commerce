import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  ${({ theme }) => css`
    position: relative;
    appearance: none;
    width: 2rem;
    height: 2rem;

    border: 1px solid ${theme.colors.xxgray};
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      width: 0.3em;
      height: 0.6em;
      border: 0.3rem solid ${theme.colors.black};
      border-top: 0;
      border-left: 0;

      position: absolute;
      top: 0.1rem;

      opacity: 0;
      transition: transform 50ms;
      border-color: ${theme.colors.white};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
        transform: rotate(45deg);
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.blue};
      outline: 3px solid transparent;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.xxblack};
    font-weight: 400;
    font-size: 1.6rem;
    user-select: none;
    line-height: 1;
  `}
`
