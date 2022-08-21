import { render, screen } from 'utils/test-utils'

import Table from '.'

const props = {
  categories: ['Cor', 'Composição', 'Local de instalação'],
  descriptions: [
    'Bege',
    '75,5% Green PVC e 24,5% de Poliéster',
    'Parede, teto, vão de portas e janelas'
  ]
}

describe('<Table />', () => {
  it('should render correctly', () => {
    render(<Table {...props} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    props.categories.map((item) =>
      expect(screen.getByText(item)).toBeInTheDocument()
    )
    props.descriptions.map((item) =>
      expect(screen.getByText(item)).toBeInTheDocument()
    )
  })

  it('background must be listed', () => {
    render(<Table {...props} />)

    expect(screen.getByText(props.descriptions[0])).toHaveStyle({
      background: '#f6f6f6'
    })
    expect(screen.getByText(props.descriptions[1])).not.toHaveStyle({
      background: '#f6f6f6'
    })
    expect(screen.getByText(props.categories[0])).toHaveStyle({
      background: '#f6f6f6'
    })
    expect(screen.getByText(props.categories[1])).not.toHaveStyle({
      background: '#f6f6f6'
    })
  })
})
