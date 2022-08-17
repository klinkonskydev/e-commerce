import { Meta, Story } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta<CheckboxProps>

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
