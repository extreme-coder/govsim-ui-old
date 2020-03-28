import React from 'react';
import {Form, Button} from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';

class Login extends React.Component {
    addStudent = (values) => {
        console.log(values)
        //TODO: call the action to add student
    }

    render() {
      return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={this.props.handleSubmit(this.addStudent)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="Name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="Password" component={TextField} label="Password" placeholder="Enter Password" />
            
                <Button variant="primary" type="submit">
                    Log In
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}


export default reduxForm({form: 'login_form', enableReinitialize: true})(Login);