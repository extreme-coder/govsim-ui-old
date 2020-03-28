import React from 'react';
import {Form, Button} from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';

class EditStudent extends React.Component {
    addStudent = (values) => {
        console.log(values)
        //TODO: call the action to add student
    }

    render() {
      return (
        <div>
            <h3>Create new student</h3>
            <form onSubmit={this.props.handleSubmit(this.addStudent)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="FirstName" component={TextField} label="First name" placeholder="Enter First name" />

                <Field name="LastName" component={TextField} label="Last name" placeholder="Enter Last name" />

                <Field name="DateOfBirth" component={TextField} label="Date of Birth" placeholder="Enter Date of Birth" />

                <Field name="email" component={TextField} label="Email" placeholder="Email" />

                <Field name="password" component={TextField} label="Password" placeholder="Password" />
            
                <Button variant="primary" type="submit">
                    Create
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}


export default reduxForm({form: 'add_student_form', enableReinitialize: true})(EditStudent);