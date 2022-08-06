import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import StarList from '.'

jest.mock('components/Star', () => ({
  __esModule: true,
  default: function ({ checked = false }: { checked?: boolean }) {
    return <span>star {checked && 'checked'}</span>
  }
}))

describe('<StarList />', () => {
  it('should render star no checked', () => {
    render(<StarList />)
    expect(screen.getAllByText(/star/i)).toHaveLength(5)
  })

  it('should render 2 checked star and 3 not checked', () => {
    render(<StarList rate={2} />)

    expect(screen.getAllByText(/star checked/i)).toHaveLength(2)
    expect(screen.getAllByText(/^star$/i)).toHaveLength(3)
  })

  it('should render 5 checked star and 0 not checked', () => {
    render(<StarList rate={5} />)

    expect(screen.getAllByText(/star checked/i)).toHaveLength(5)
  })

  it('should render 3 checked star and 0 not checked, and click in fourt star and check then', async () => {
    render(<StarList rate={3} />)

    expect(screen.getAllByText(/star checked/i)).toHaveLength(3)
    userEvent.click(screen.getAllByText(/^star$/i)[0])

    await waitFor(() => {
      expect(screen.getAllByText(/star checked/i)).toHaveLength(4)
    })
  })
})
