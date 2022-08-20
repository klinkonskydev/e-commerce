import { render, screen } from 'utils/test-utils'

import Filters from '.'

describe('<Filters />', () => {
  it('should render the title', () => {
    render(<Filters />)

    expect(
      screen.getByRole('heading', { name: /preço por m²/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /cor/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /avaliação dos clientes/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /fixação\/suporte/i })
    ).toBeInTheDocument()
  })
})
