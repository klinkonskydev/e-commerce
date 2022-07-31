import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'normal', 'big']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['transparent', 'contained', 'outlined']
      }
    },
    checked: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    children: 'Login'
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const ButtonLink: Story<ButtonProps> = (args) => (
  <Button
    {...args}
    as="a"
    href="https://www.linkedin.com/in/klinkonsky/"
    target="_blank"
  >
    Go to my linkedin profile
  </Button>
)
