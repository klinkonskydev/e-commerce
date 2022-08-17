import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    render(<Checkbox label="checkbox label" labelFor="check" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    // getByLabelText pega o input
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()
    render(<Checkbox label="Checkbox" labelFor="check" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText(/Checkbox/i))
    await waitFor(() => expect(onCheck).toHaveBeenCalled())
    expect(onCheck).toHaveBeenCalledWith(true)
  })
  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()
    render(
      <Checkbox label="Checkbox" labelFor="check" onCheck={onCheck} isChecked />
    )
    expect(screen.getByLabelText(/checkbox/i)).toHaveAttribute('checked')
    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText(/checkbox/i))
    await waitFor(() => expect(onCheck).toHaveBeenCalled())
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
