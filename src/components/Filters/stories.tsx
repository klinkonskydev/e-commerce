import { ComponentStory, ComponentMeta } from '@storybook/react'

import Filters from '.'

export default {
  title: 'Filters',
  component: Filters
} as ComponentMeta<typeof Filters>

export const Default: ComponentStory<typeof Filters> = (args) => (
  <Filters {...args} />
)
