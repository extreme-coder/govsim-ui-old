import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import TextField from './common/TextField';
import * as actions from './actions/auth';

class Signup extends React.Component {
    addUser = (values) => {
        console.log(values)
        values.username = values.email
        this.props.addUser(values)        
    }


    render() {
      return (
        <div>
            <Formik enableReinitialize onSubmit={this.addUser}  initialValues={{email:'', password:''}}>
              {(props) => (
              <Form noValidate onSubmit={props.handleSubmit}>             
                    <Form.Group controlId="formBasicName">

                    <TextField name="email"  label="Email" placeholder="Email" />

                    <TextField name="password"  label="Password" placeholder="Password" />
                
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form.Group>
              </Form>
              )}
            </Formik>
        </div>

      );
    }
}

export default Signup = connect(
    null, actions
)(Signup);

