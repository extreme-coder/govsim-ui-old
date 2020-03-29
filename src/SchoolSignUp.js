import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import * as actions from './actions/schools';

class SchoolSignUp extends React.Component {
    schoolSignUp = (values) => {
        console.log(values)
        this.props.addSchool(values)
    }

    render() {
      return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={this.props.handleSubmit(this.schoolSignUp)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="Name" component={TextField} label="Name Of School" placeholder="Enter Name" />
                <Field name="address.street" component={TextField} label="Street" placeholder="Enter Street" />
                <Field name="address.city" component={TextField} label="City" placeholder="Enter City" />
                <Field name="address.state" component={TextField} label="State" placeholder="Enter State" />
                <Field name="address.country" component={TextField} label="Country" placeholder="Enter Country" />
                <Field name="address.postal_code" component={TextField} label="Postal Code" placeholder="Enter Postal Code" />
            
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

SchoolSignUp = connect(
  null, actions
)(SchoolSignUp);

export default reduxForm({form: 'school_signup_form', enableReinitialize: true})(SchoolSignUp);