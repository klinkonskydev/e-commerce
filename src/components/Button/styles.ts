import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.xbig};
  `,
  normal: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.xhue};
  `,
  big: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.main};
  `,
  transparent: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    background: transparent;

    &:hover,
    &:focus {
      transform: scale(1);
      outline: 1px dashed ${theme.colors.primary};
      outline-offset: 1px;
    }
  `,
  contained: (theme: DefaultTheme) => css`
    color: ${theme.colors.xwhite};
    background: ${theme.colors.primary};
  `,
  outlined: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    background: transparent;
    border: 2px solid ${theme.colors.primary};
  `
}
export type WrapperProps = Pick<ButtonProps, 'size' | 'variant'>
export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, variant }) => css`
    outline: 0;
    border: 0;

    border-radius: 4px;
    transition: transform 140ms;

    &:focus {
      outline: 1px dashed ${theme.colors.black};
      outline-offset: 1px;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`
