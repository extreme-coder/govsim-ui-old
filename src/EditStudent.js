import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import * as actions from './actions/students';

class EditStudent extends React.Component {
  saveStudent = (values) => {       
    if (this.props.match.params.id == 'new') {        
      this.props.addStudent(values)          
    } else {
      this.props.updateStudent(values)
    }  
  }

  componentDidMount() {      
    if (this.props.match.params.id) {
      this.props.getStudent(this.props.match.params.id);
    }
  }  

    render() {
      return (
        <div>
            <h3>Create new student</h3>
            <form onSubmit={this.props.handleSubmit(this.saveStudent)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="first_name" component={TextField} label="First name" placeholder="Enter First name" />

                <Field name="last_name" component={TextField} label="Last name" placeholder="Enter Last name" />

                <Field name="date_of_birth" component={DateField} label="Date of Birth" placeholder="Enter Date of Birth" />

                <Field name="email" component={TextField} label="Email" placeholder="Email" />

                <Field name="password" component={TextField} label="Password" placeholder="Password" />
            
                <Button variant="primary" type="submit">
                    Save
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}
const mapStateToProps = state => {
  return {
    initialValues: state.students.student
  }
}

EditStudent = reduxForm({form: 'edit_student_form', enableReinitialize: true})(EditStudent);

export default  connect(
  mapStateToProps, actions
)(EditStudent);