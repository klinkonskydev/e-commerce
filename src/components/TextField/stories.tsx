import { Meta, Story } from '@storybook/react/types-6-0'
import { Search } from '@styled-icons/evil/Search'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    placeholder: 'Busque por um produto'
  }
} as Meta<TextFieldProps>

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />

export const EndIcon: Story<TextFieldProps> = (args) => (
  <TextField
    {...args}
    endIcon={<Search data-testid="search icon" size={30} />}
  />
)

export const StartIcon: Story<TextFieldProps> = (args) => (
  <TextField
    {...args}
    startIcon={<Search data-testid="search icon" size={30} />}
  />
)
