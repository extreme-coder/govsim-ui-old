import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import TextField from './common/TextField';
import * as actions from './actions/students';
import { Formik } from "formik";

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
            <Formik enableReinitialize onSubmit={this.saveStudent}  initialValues={this.props.student}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>           
               <Form.Group controlId="formBasicName">
                    
                <TextField name="first_name"  label="First name" placeholder="Enter First name" />

                <TextField name="last_name" label="Last name" placeholder="Enter Last name" />

                <DateField name="date_of_birth"  label="Date of Birth" placeholder="Enter Date of Birth" />

                <TextField name="email"  label="Email" placeholder="Email" />

                <TextField name="password"  label="Password" placeholder="Password" />
            
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
    student: state.students.student
  }
}

export default  connect(
  mapStateToProps, actions
)(EditStudent);