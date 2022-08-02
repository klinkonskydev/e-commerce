import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Star from '.'

describe('<Star />', () => {
  it('should render the star', () => {
    render(<Star />)

    expect(screen.getByTitle(/star/i)).toBeInTheDocument()
    expect(screen.getByTitle(/star/i).parentElement).toHaveStyle({
      fill: 'transparent',
      stroke: '#282828'
    })
  })

  it('should render the star checked', () => {
    render(<Star checked />)

    expect(screen.getByTitle(/star/i).parentElement).toHaveStyle({
      fill: '#EB6D47',
      stroke: '#EB6D47'
    })
  })

  it('should toggle star checked', async () => {
    render(<Star />)

    expect(screen.getByTitle(/star/i).parentElement).toHaveStyle({
      fill: 'transparent',
      stroke: '#282828'
    })

    userEvent.click(screen.getByTitle(/star/i))

    await waitFor(() => {
      expect(screen.getByTitle(/star/i).parentElement).toHaveStyle({
        fill: '#EB6D47',
        stroke: '#EB6D47'
      })
    })
  })
})
