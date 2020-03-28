import React from "react";
import { FormControl, ControlLabel} from 'react-bootstrap';



class TextAreaField extends React.Component {

  render() {
    const {input, meta, ...p} = this.props;
    return(
      <div>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl componentClass="textarea" {...input}   {...p} onChange={input.onChange}>
          {this.props.children}
        </FormControl>
      </div>
    );
  }
}
export default TextAreaField;
