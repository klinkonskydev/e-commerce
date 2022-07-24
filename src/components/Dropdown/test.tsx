import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    render(
      <Dropdown title={<a href="#">title</a>}>
        <ul>
          <li>Categoria</li>
          <li>Produtos mais vendidos</li>
          <li>Produtos mais visualizados</li>
          <li>
            <a href="#">Ajuda</a>
          </li>
        </ul>
      </Dropdown>
    )
  })

  it('should render correctly', () => {
    expect(screen.getByRole('link', { name: /title/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /ajuda/i })
    ).not.toBeInTheDocument()
  })

  it('should open when user hover the mouse in title', () => {
    const title = screen.getByRole('link', { name: /title/i })

    userEvent.hover(title)
    expect(screen.getByRole('link', { name: /ajuda/i })).toBeInTheDocument()

    userEvent.unhover(title)
    expect(
      screen.queryByRole('link', { name: /ajuda/i })
    ).not.toBeInTheDocument()
  })

  it('should open when user press tab and focus in title', () => {
    const title = screen.getByRole('link', { name: /title/i })

    userEvent.tab()
    expect(title).toHaveFocus()
    expect(screen.getByRole('link', { name: /ajuda/i })).toBeInTheDocument()

    userEvent.tab()
    expect(screen.getByRole('link', { name: /ajuda/i })).toHaveFocus()
  })
})
