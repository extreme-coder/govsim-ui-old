import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import StudentClass from './StudentClass';
import * as actions from './actions/students';
import * as classActions from './actions/classes';
import { Formik, Field, FieldArray } from 'formik';

class EditStudent extends React.Component {

  classOptions() {
    return this.props.classes.map((clas) => {
      return (<option key={clas.id} value={clas.id}>{clas.name}</option>)
    });
  }

  saveStudent = (values) => {       
    if (this.props.match.params.id == 'new') {        
      this.props.addStudent(values)          
    } else {
      this.props.updateStudent(values)
    }  
  }

  componentDidMount() {      
    if (this.props.match.params.id != 'new') {
      this.props.getStudent(this.props.match.params.id);
    } 
  }  

    render() {
      
      return (
        <div>
          <h3>Create new student</h3>
          <div>
            <Formik enableReinitialize onSubmit={this.saveStudent}  initialValues={this.props.student}>
              {(props) => (
                <div>
                  <Form noValidate onSubmit={props.handleSubmit}>           
                  <Form.Group controlId="formBasicName">
                      
                    <TextField name="first_name"  label="First name" placeholder="Enter First name" />

                    <TextField name="last_name" label="Last name" placeholder="Enter Last name" />

                    <DateField name="date_of_birth"  label="Date of Birth" placeholder="Enter Date of Birth" />

                    <TextField name="email"  label="Email" placeholder="Email" />

                    <TextField name="password"  label="Password" placeholder="Password" />

                    <FieldArray name="student_class" component={StudentClass} />

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                  </Form.Group>
                </Form> 
              
                </div>
              )}
            </Formik>
          </div>
        </div> 
      )  
    }
}

const mapStateToProps = state => {
  return {
    student: state.students.student,
    ...state.classes,
  }
}

export default  connect(
  mapStateToProps, {...actions,...classActions}
)(EditStudent);