import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TextField from './common/TextField';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  identifier: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

class Login extends React.Component {

  login = (values) => {
    console.log(values)
    this.props.login(values)
  }

  render() {
    if (localStorage.getItem('user') != null) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      )
    }

    return (
      <div class="container">

        <div class="row justify-content-center">

          <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <div>
                        <h3>Log In</h3>
                        <Formik enableReinitialize validationSchema={LoginSchema} onSubmit={this.login} initialValues={{ identifier: '', password: '' }}>
                          {(props) => (
                            <Form noValidate onSubmit={props.handleSubmit}>
                              <Form.Group controlId="formBasicName">
                                <TextField name="identifier" label="Email" placeholder="Email" />
                                <TextField name="password" label="Password" type="password" placeholder="Password" />
                                <Button variant="primary" type="submit">
                                  Log In
                                </Button>
                              </Form.Group>
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="signup">Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}


export default Login = connect(
  null, actions
)(Login);
