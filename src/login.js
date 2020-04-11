import React from 'react';
import {Form, Button} from 'react-bootstrap';
import TextField from './common/TextField';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    login = (values) => {
        console.log(values)
        this.props.login(values)
    }

    render() {
      if(localStorage.getItem('user') != null) {
        return (
          <Redirect
              to={{
                pathname: "/dashboard"
              }}
            />
        )
      }

      return (
        <div>
            <h3>Log In</h3>
            <Formik enableReinitialize onSubmit={this.login}  initialValues={{identifier:'', password:''}}>
              {(props) => (
              <Form noValidate onSubmit={props.handleSubmit}> 
              <Form.Group controlId="formBasicName">                
                <TextField name="identifier"  label="Email" placeholder="Email" />
                <TextField name="password" label="Password" type="password" placeholder="Password" />
                <Button variant="primary" type="submit">
                    Log In
                </Button>
              </Form.Group>  
              </Form>
              )}
            </Formik>  
        </div>

      );
    }
}

  
export default Login = connect(
    null, actions
)(Login);
