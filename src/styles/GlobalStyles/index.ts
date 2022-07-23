import { createGlobalStyle, css } from 'styled-components'
import theme from 'styles/theme'

type GlobalStyleProps = {
  hasBg?: boolean
}

export default createGlobalStyle<GlobalStyleProps>`
  ${({ hasBg = true }) => css`
    body,
    body * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font: normal 600 1.6rem/1.4 -apple-system, Roboto, sans-serif;
      transition: font-size 120ms linear;
    }

    html,
    body,
    #__next {
      width: 100%;
      height: 100%;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    ul,
    ol {
      list-style: none;
    }

    @media (min-width: 768px) {
      html {
        font-size: 62.5%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 50%;
      }
    }

    @media (prefers-reduced-motion) {
      body {
        transition: all 0ms;
      }
    }

    body {
      ${hasBg &&
      css`
        background: ${theme.colors.xwhite};
      `}
      color: ${theme.colors.black};
    }
  `}
`
