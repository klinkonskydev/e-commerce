import { render, screen } from 'utils/test-utils'
import props from './mock'

import Card from '.'

describe('<Card />', () => {
  it('should render correctly', () => {
    render(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByText(`R$ ${props.price.replace('.', ',')}`)
    ).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.imgUrl)
  })

  it('should not render the title', () => {
    render(<Card {...props} title="" />)

    expect(
      screen.queryByRole('heading', { name: props.title })
    ).not.toBeInTheDocument()
  })

  it('should render the minimal card', () => {
    render(<Card {...props} variant="minimal" title="" />)

    expect(screen.getByText(`R$ ${props.price.replace('.', ',')}`)).toHaveStyle(
      { textAlign: 'center' }
    )
  })

  it('should render the big card', () => {
    render(<Card {...props} variant="big" title="" />)

    expect(screen.getByRole('img')).toHaveStyle({
      borderRadius: '8px'
    })
  })
})
