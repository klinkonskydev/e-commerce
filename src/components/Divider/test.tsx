import { render } from 'utils/test-utils'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the title', () => {
    const { container } = render(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        height: 1px;
        background: #282828;
      }

      <div
        class="c0"
        color="black"
      />
    `)
  })
})
