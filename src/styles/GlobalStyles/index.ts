import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body, body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 50.0%;
    }
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    transition: font-size 120ms linear;
    font-family: -apple-system, Roboto, sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  @media (prefers-reduced-motion) {
    body {
      transition: all 0ms;
    }
  }
`
