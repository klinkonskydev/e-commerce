import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'
import { Search } from '@styled-icons/evil/Search'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the title', () => {
    render(<TextField placeholder="Busque por um produto" />)

    expect(
      screen.getByPlaceholderText(/busque por um produto/i)
    ).toBeInTheDocument()
  })

  it('should render the endIcon', () => {
    render(<TextField endIcon={<Search data-testid="search icon" />} />)
    expect(screen.getByTestId(/search icon/i)).toBeInTheDocument()
  })

  it('should render the startIcon', () => {
    render(<TextField startIcon={<Search data-testid="search icon" />} />)
    expect(screen.getByTestId(/search icon/i)).toBeInTheDocument()
  })

  it('should type on input', async () => {
    const onInputChange = jest.fn()
    render(<TextField placeholder="Email" onInputChange={onInputChange} />)

    const text = 'klinkonskydev@gmail.com'
    userEvent.type(screen.getByPlaceholderText(/email/i), text)

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalled()
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })
})
