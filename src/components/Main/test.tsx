import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the title', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
  })
})
