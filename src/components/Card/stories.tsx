import { ComponentStory, ComponentMeta } from '@storybook/react'

const props = {
  title: 'Modelo tecido cor tipo de fixação',
  price: '132.98',
  imgUrl:
    'https://images.unsplash.com/photo-1593909840438-48825492a8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}

import Card from '.'

export default {
  title: 'Card',
  component: Card,
  args: props
} as ComponentMeta<typeof Card>

export const Default: ComponentStory<typeof Card> = (args) => <Card {...args} />
