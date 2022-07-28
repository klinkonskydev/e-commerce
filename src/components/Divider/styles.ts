import styled, { css } from 'styled-components'
import { DividerProps } from '.'

export const Divider = styled.div<Required<DividerProps>>`
  ${({ theme, color, h }) => css`
    width: 100%;
    height: ${h}px;

    background: ${theme.colors[color]};
  `}
`
