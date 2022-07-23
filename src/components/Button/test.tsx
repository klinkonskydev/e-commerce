import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render correct the button', () => {
    render(<Button>Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      background: theme.colors.primary
    })
  })
})
