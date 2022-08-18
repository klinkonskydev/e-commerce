import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from '.'

export default {
  title: 'Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
)
