import { ComponentStory, ComponentMeta } from '@storybook/react'

import Star from '.'

export default {
  title: 'Star',
  component: Star
} as ComponentMeta<typeof Star>

export const Default: ComponentStory<typeof Star> = (args) => <Star {...args} />
