import { render, screen } from 'utils/test-utils'

import Header from '.'

jest.mock('components/Button', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  )
}))

describe('<Header />', () => {
  it('should render the title', () => {
    render(<Header />)

    expect(screen.getByRole('button', { name: /sign-in/i })).toBeInTheDocument()
  })
})
