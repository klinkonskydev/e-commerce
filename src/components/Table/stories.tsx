import { ComponentStory, ComponentMeta } from '@storybook/react'

import Table from '.'

export default {
  title: 'Table',
  component: Table,
  args: {
    categories: [
      'Modelo',
      'Cor',
      'Modelo',
      'Composição',
      'Local de instalação'
    ],
    descriptions: [
      'Modelo',
      'Bege',
      'Modelo',
      '75,5% Green PVC e 24,5% de Poliéster',
      'Parede, teto, vão de portas e janelas'
    ]
  }
} as ComponentMeta<typeof Table>

export const Default: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
)
