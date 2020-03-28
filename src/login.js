import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import { connect } from 'react-redux';
import * as actions from './actions/auth';

class Login extends React.Component {

    login = (values) => {
        console.log(values)
        this.props.login(values)
    }

    render() {
      return (
        <div>
            <h3>Log In</h3>
            <form onSubmit={this.props.handleSubmit(this.login)}>
              <Form.Group controlId="formBasicName">                
                <Field name="identifier" component={TextField} label="Email" placeholder="Email" />
                <Field name="password" component={TextField} label="Password" type="password" placeholder="Password" />
                <Button variant="primary" type="submit">
                    Log In
                </Button>
              </Form.Group>  
            </form>
        </div>

      );
    }
}

  
Login = connect(
    null, actions
)(Login);

export default reduxForm({form: 'login_form', enableReinitialize: true})(Login);
