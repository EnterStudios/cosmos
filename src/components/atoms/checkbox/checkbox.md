```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

## State Management

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Checkbox
        name="example1"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
        {props}
      >
        <Checkbox.Option value="one">Option 1</Checkbox.Option>
        <Checkbox.Option value="two">Option 2</Checkbox.Option>
      </Checkbox>
    )
  }
}
```

## Read-only

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'two' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Checkbox
        name="example2"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
      >
        <Checkbox.Option value="one" readOnly>
          Option 1
        </Checkbox.Option>
        <Checkbox.Option value="two">Option 2</Checkbox.Option>
      </Checkbox>
    )
  }
}
```

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Checkbox
        name="example3"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
        readOnly
      >
        <Checkbox.Option value="one">Option 1</Checkbox.Option>
        <Checkbox.Option value="two">Option 2</Checkbox.Option>
      </Checkbox>
    )
  }
}
```
