import React from 'react';
import {Form, Button} from 'react-bootstrap';
import renderDatePicker from "./common/RenderDatePicker";
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
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
            <form onSubmit={this.props.handleSubmit(this.addUser)}>
               <Form.Group controlId="formBasicName">

                <Field name="email" component={TextField} label="Email" placeholder="Email" />

                <Field name="password" component={TextField} label="Password" placeholder="Password" />
            
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

const mapStateToProps = state => {
    return {
        values: getFormValues('signup_form')(state)
    };
}

Signup = connect(
    mapStateToProps, actions
)(Signup);

export default reduxForm({form: 'signup_form', enableReinitialize: true})(Signup);