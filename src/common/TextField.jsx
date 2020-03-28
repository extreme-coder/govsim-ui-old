import React from "react";
import { FormControl, FormLabel, FormGroup} from 'react-bootstrap';



class TextField extends React.Component {

  render() {
    const {input, meta, ...p} = this.props;
    let type = this.props.type;
    const { touched, error, warning, valid } = meta
    if (type) type = 'text' 
    return(
      <FormGroup validationState={(!valid && touched)?'error':''}>
        <FormLabel>{this.props.label}</FormLabel>
        <FormControl {...input} type={type}  {...p} onChange={input.onChange}/>
        <FormControl.Feedback />
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </FormGroup>
    );
  }
}
export default TextField;
