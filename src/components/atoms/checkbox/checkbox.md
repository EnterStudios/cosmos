```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

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
        <Checkbox.Option value="three">Option 3</Checkbox.Option>
        <Checkbox.Option value="four">Option 4</Checkbox.Option>
      </Checkbox>
    )
  }
}
```
