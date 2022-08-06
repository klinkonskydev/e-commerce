import { ComponentStory, ComponentMeta } from '@storybook/react'

import StarList from '.'

export default {
  title: 'StarList',
  component: StarList
} as ComponentMeta<typeof StarList>

export const Default: ComponentStory<typeof StarList> = (args) => (
  <StarList {...args} />
)
