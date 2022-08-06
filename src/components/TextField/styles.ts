import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.xgray};
  `}
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 27px;
  background: #f6f6f6;
  overflow: hidden;

  padding: 8px;

  &:focus-within {
    outline: 1px dashed #8a8c90;
    outline-offset: 2px;
  }
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    font-size: 1.6rem;

    border: 0;
    outline: 0;

    color: #8a8c90;
    font-weight: 500;
    padding: 4px;
    caret-color: ${theme.colors.primary};
  `}
`

export const Icon = styled.button`
  ${({ theme }) => css`
    all: initial;

    width: fit-content;
    height: 100%;
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 100%;

    &:focus,
    &:hover {
      outline: 1px solid #8a8c90;
      outline-offset: 4px;
    }
  `}
`
