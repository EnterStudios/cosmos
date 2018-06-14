```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    return (
      <Checkbox
        name="example1"
        selected={this.state.selected}
        onChange={this.handleChange}
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
