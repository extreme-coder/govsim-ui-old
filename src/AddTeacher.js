import React from 'react';
import {Form, Button} from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';

class AddTeacher extends React.Component {
    addStudent = (values) => {
        console.log(values)
        //TODO: call the action to add student
    }

    render() {
      return (
        <div>
            <h3>Add Teacher</h3>
            <form onSubmit={this.props.handleSubmit(this.addStudent)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="Name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="Classes" component={TextField} label="Classes" placeholder="Enter Classes" />
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}


export default reduxForm({form: 'add_teacher_form', enableReinitialize: true})(AddTeacher);