import { ComponentStory, ComponentMeta } from '@storybook/react'

import Divider from '.'

export default {
  title: 'Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

export const Default: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
)
