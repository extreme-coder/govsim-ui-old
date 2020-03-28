import React from 'react';
import {Form, Button} from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';

class AddClass extends React.Component {
    addStudent = (values) => {
        console.log(values)
        //TODO: call the action to add student
    }

    render() {
      return (
        <div>
            <h3>Add Class</h3>
            <form onSubmit={this.props.handleSubmit(this.addStudent)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="Name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="StartTime" component={TextField} label="StartTime" placeholder="Enter Start Time" />

                <Field name="EndTime" component={TextField} label="End Time" placeholder="Enter End Time" />

                <Field name="StartDate" component={TextField} label="Start Date" placeholder="Enter Start Date" />

                <Field name="EndDate" component={TextField} label="End Date" placeholder="Enter End Date" />

                <Field name="Teachers" component={TextField} label="Teachers" placeholder="Enter Teachers" />

                <Field name="Room" component={TextField} label="Room" placeholder="Enter Room" />

                <Field name="DOTW" component={TextField} label="Days Of Class" placeholder="Enter Days" />
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}


export default reduxForm({form: 'add_class_form', enableReinitialize: true})(AddClass);