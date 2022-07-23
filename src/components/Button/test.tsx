import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render correct the button', () => {
    render(<Button>Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      background: theme.colors.primary,
      padding: `${theme.spacings.xsmall} ${theme.spacings.xhue}`
    })
  })

  it('should render small button', () => {
    render(<Button size="small">Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      padding: `${theme.spacings.xsmall} ${theme.spacings.xbig}`
    })
  })

  it('should render big button', () => {
    render(<Button size="big">Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      padding: `${theme.spacings.medium} ${theme.spacings.main}`
    })
  })

  it('should render outlined button', () => {
    render(<Button variant="outlined">Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      background: `${theme.colors.white}`,
      border: `2px solid ${theme.colors.primary}`
    })
  })

  it('should render transparent button', () => {
    render(<Button variant="transparent">Sign-in</Button>)

    expect(screen.getByRole('button', { name: /sign-in/i })).toHaveStyle({
      background: 'transparent'
    })
  })

  it('should render the button as link', () => {
    render(
      <Button as="a" href="#">
        back
      </Button>
    )

    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument()
  })
})
