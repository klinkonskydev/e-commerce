import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

export const Default: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} total={40} perPage={5} page={0} />
)
