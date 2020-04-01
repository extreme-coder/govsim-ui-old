import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Formik } from "formik";
import { connect } from 'react-redux';

import TextField from './common/TextField';
import * as actions from './actions/teachers';

class AddTeacher extends React.Component {

    saveTeacher = (values) => {     
      if (this.props.match.params.id == 'new') {        
        this.props.addTeacher(values)          
      } else {
        this.props.updateTeacher(values)
      }        
    }

    componentDidMount() {      
      if (this.props.match.params.id!= 'new') {
        this.props.getTeacher(this.props.match.params.id);
      }
    }  

    render() {      
      return (
        <div>
          <h3>Add Teacher</h3>
          <Formik enableReinitialize onSubmit={this.saveTeacher}  initialValues={this.props.teacher}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>            
               <Form.Group controlId="formBasicName">                    
                <TextField name="name"  label="Name" placeholder="Enter Name" />
                <TextField name="email" label="Email" placeholder="Enter Email" />
                <TextField name="password" label="Password" placeholder="Enter Password" />          
                <Button variant="primary" type="submit"> Save </Button>
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
    teacher: state.teachers.teacher
  }
}

export default  connect(
  mapStateToProps, actions
)(AddTeacher);

