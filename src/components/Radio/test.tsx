import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label', () => {
    render(<Radio label="Radio label" labelFor="check" />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    // getByLabelText pega o input
    expect(screen.getByLabelText(/Radio label/i)).toBeInTheDocument()
    expect(screen.getByText(/Radio label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    render(<Radio />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.queryByLabelText(/Radio label/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()
    render(
      <Radio
        label="Radio"
        labelFor="check"
        onCheck={onCheck}
        value="anyValue"
      />
    )
    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText(/Radio/i))
    await waitFor(() => expect(onCheck).toHaveBeenCalled())
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })
})
