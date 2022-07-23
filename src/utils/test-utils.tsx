import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const customRender = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

export * from '@testing-library/react'
export { customRender as render }
