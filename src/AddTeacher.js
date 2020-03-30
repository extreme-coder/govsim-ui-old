import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import * as actions from './actions/teachers';

class AddTeacher extends React.Component {
    addTeacher = (values) => {
        console.log(values)
        this.props.addTeacher(values)
    }

    render() {
      return (
        <div>
            <h3>Add Teacher</h3>
            <form onSubmit={this.props.handleSubmit(this.addTeacher)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="email" component={TextField} label="Email" placeholder="Enter Email" />

                <Field name="password" component={TextField} label="Password" placeholder="Enter Password" />
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

AddTeacher = connect(
  null, actions
)(AddTeacher);

export default reduxForm({form: 'add_teacher_form', enableReinitialize: true})(AddTeacher);