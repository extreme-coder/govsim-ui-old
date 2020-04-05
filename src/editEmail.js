import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as emailActions from './actions/emails';
import actions from 'redux-form/lib/actions';
import { Formik } from "formik";

class addEmail extends React.Component {
  saveEmail = (values) => {      
    if (this.props.match.params.id == 'new') {        
      this.props.addEmail(values)        
    } else {
      this.props.updateEmail(values)
    }  
  }

    componentDidMount() {
      if (this.props.match.params.id != "new") {
        this.props.getEmail(this.props.match.params.id);
      }
    }

    render() {
      return (
        <div>
            <h3>Compose Email</h3>
            <Formik enableReinitialize onSubmit={this.saveEmail}  initialValues={this.props.email}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>            
                <Form.Group controlId="formBasicName">     

                <SelectField name="to" label="To:" placeholder="Who You Want To Send To" >
                    <option value="teachers">Teachers</option>
                    <option value="students">Students</option>
                    <option value="all">All</option>
                </SelectField>
            
                <TextField name="subject" label="Subject" placeholder="Enter Subject" />

                <TextField name="message" label="Message" placeholder="Enter Message" />


                <SelectField name="status" label="When To Send" placeholder="When Do You Want To Send It" >
                    <option value="sent">Now</option>
                    <option value="created">Later</option>
                </SelectField>

                <Button variant="primary" type="submit">
                    Save
                </Button>
              </Form.Group>
              </Form> 
          )}
            </Formik>
        </div>

      );
    }
}

const mapStateToProps = state => {
  return {
    email: state.emails.email,
  }
}

export default  connect(
  mapStateToProps, {...emailActions}
)(addEmail);