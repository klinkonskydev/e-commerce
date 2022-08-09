import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Pagination from '.'

describe('<Pagination />', () => {
  it('should render 5 buttons in pagination', () => {
    render(<Pagination total={30} perPage={10} page={1} />)
    expect(screen.getAllByRole('button')).toHaveLength(5)
    expect(screen.getByLabelText(/next page/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/previous page/i)).toBeInTheDocument()
  })

  it('if page is 0 should disable two first buttons', () => {
    render(<Pagination total={30} perPage={10} page={1} />)
    expect(screen.getAllByRole('button')[0]).toHaveAttribute('disabled')
  })

  it('if page is equal to totalCount should disable last button', () => {
    render(<Pagination total={30} perPage={10} page={3} />)
    expect(screen.getAllByRole('button')[4]).toHaveAttribute('disabled')
  })

  it('should jump to next page', async () => {
    render(<Pagination total={30} perPage={10} page={1} />)
    expect(screen.getAllByRole('button')[1]).toHaveAttribute('disabled')
    userEvent.click(screen.getByLabelText(/next page/i))
    await waitFor(() => {
      expect(screen.getAllByRole('button')[1]).not.toHaveAttribute('disabled')
    })
  })

  it('should jump to previous page', async () => {
    render(<Pagination total={30} perPage={10} page={3} />)
    expect(screen.getAllByRole('button')[4]).toHaveAttribute('disabled')
    userEvent.click(screen.getByLabelText(/previous page/i))
    await waitFor(() => {
      expect(screen.getAllByRole('button')[4]).not.toHaveAttribute('disabled')
    })
  })

  it('should change page when click in any button', async () => {
    render(<Pagination total={30} perPage={10} page={1} />)
    const button = screen.getByRole('button', { name: '2' })
    userEvent.click(button)
    await waitFor(() => {
      expect(button).toHaveAttribute('disabled')
    })
  })
})
