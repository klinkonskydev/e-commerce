import styled, { css } from 'styled-components'
import { StarProps } from '.'

export const Wrapper = styled.svg<StarProps>`
  ${({ theme, checked }) => css`
    fill: transparent;
    stroke: ${theme.colors.black};

    ${checked &&
    css`
      fill: ${theme.colors.primary};
      stroke: ${theme.colors.primary};
    `}
  `}
`
