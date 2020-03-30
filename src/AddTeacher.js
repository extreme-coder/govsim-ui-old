import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
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
      if (this.props.match.params.id) {
        this.props.getTeacher(this.props.match.params.id);
      }
    }  

    render() {
      return (
        <div>
            <h3>Add Teacher</h3>
            <form onSubmit={this.props.handleSubmit(this.saveTeacher)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="email" component={TextField} label="Email" placeholder="Enter Email" />

                <Field name="password" component={TextField} label="Password" placeholder="Enter Password" />
            
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
    initialValues: state.teachers.teacher
  }
}

AddTeacher = reduxForm({form: 'add_teacher_form', enableReinitialize: true})(AddTeacher);

export default  connect(
  mapStateToProps, actions
)(AddTeacher);

