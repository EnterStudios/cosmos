import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox } from '@auth0/cosmos'

storiesOf('Checkbox', module).add('default', () => (
  <Checkbox name="example" selected="one">
    <Checkbox.Option value="one">Option 1</Checkbox.Option>
    <Checkbox.Option value="two">Option 2</Checkbox.Option>
  </Checkbox>
))

storiesOf('Checkbox', module).add('readOnly', () => (
  <Checkbox name="example" selected="one" readOnly>
    <Checkbox.Option value="one">Option 1</Checkbox.Option>
    <Checkbox.Option value="two">Option 2</Checkbox.Option>
  </Checkbox>
))
