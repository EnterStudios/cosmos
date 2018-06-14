import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Checkbox } from '@auth0/cosmos'

const CheckBoxExample = () => (
  <Checkbox name="example1" selected={['one', 'two']}>
    <Checkbox.Option value="one">Option 1</Checkbox.Option>
    <Checkbox.Option value="two">Option 2</Checkbox.Option>
    <Checkbox.Option value="three">Option 3</Checkbox.Option>
    <Checkbox.Option value="four">Option 4</Checkbox.Option>
  </Checkbox>
)

storiesOf('Checkbox').add('light', () => (
  <Example>
    <CheckBoxExample />
  </Example>
))

storiesOf('Checkbox').add('dark', () => (
  <Example background="dark">
    <CheckBoxExample />
  </Example>
))
