import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

export const Default: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
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

Default.args = {
  title: <a href="#">Comprar</a>
}
