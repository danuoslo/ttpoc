import * as React from 'react';

interface MarkDownEditorProps
{
    onChange: Function
}

interface MarkDownEditorState
{
    value?: string
    mounted?:boolean
}

export class MarkDownEditor extends React.Component<MarkDownEditorProps, MarkDownEditorState>
{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            mounted: false
        }
    }

  componentDidMount() {
    this.setState({mounted: true});
  }
    
  onChange = (value) => {
    this.setState({value:value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
      return (this.state.mounted ? <div></div> : null)
  }
}
