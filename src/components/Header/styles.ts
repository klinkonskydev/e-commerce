import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 2px solid ${rgba(theme.colors.primary, 0.5)};
    padding: 0.8rem 0;
  `}
`

export const Logo = styled.span`
  font-family: -apple-system, Roboto, 'Open Sans', sans-serif;
  font-size: 1.6rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 7rem;
`
