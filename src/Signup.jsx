import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import TextField from './common/TextField';
import * as actions from './actions/auth';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

class Signup extends React.Component {
  addUser = (values) => {
    values.username = values.email
    this.props.addUser(values)
  }

  render() {
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
                        <h1 class="h4 text-gray-900 mb-4">Sign Up</h1>
                      </div>
                      <div>
                        <Formik enableReinitialize validationSchema={SignupSchema} onSubmit={this.addUser} initialValues={{ email: '', password: '' }}>
                          {(props) => (
                            <Form noValidate onSubmit={props.handleSubmit}>
                              <Form.Group controlId="formBasicName">

                                <TextField name="email" label="Email" placeholder="Email" />

                                <TextField name="password" type="password" label="Password" placeholder="Password" />

                                <Button variant="primary" type="submit">
                                  Sign Up
                    </Button>
                              </Form.Group>
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="login">Already have an account? Login!</a>
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

export default Signup = connect(
  null, actions
)(Signup);

