import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the title', () => {
    render(<Button />)

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
  })
})
