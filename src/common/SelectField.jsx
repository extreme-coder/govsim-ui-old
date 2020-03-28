import React from "react";
import { FormControl, ControlLabel, FormGroup} from 'react-bootstrap';



class SelectField extends React.Component {

  render() {
    const {input, meta, ...p} = this.props;
    const { touched, error, warning, valid } = meta
    return(
      <FormGroup validationState={(!valid && touched)?'error':''}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl componentClass="select" {...input}   {...p} onChange={input.onChange}>
          {this.props.children}
        </FormControl>
        <FormControl.Feedback/>
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </FormGroup>
    );
  }
}
export default SelectField;
