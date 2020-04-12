import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import RichField from './common/RichField';
import * as actions from './actions/entity_actions';

import { Formik } from "formik";
import 'react-quill/dist/quill.snow.css';

class addEmail extends React.Component {

  saveEmail = (values) => {
    debugger;
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('email_message', values)
    } else {
      this.props.updateEntity('email_message', values)
    }
  }

  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.getEntity('email_message', this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
        <h3>Compose Email</h3>
        <Formik enableReinitialize onSubmit={this.saveEmail} initialValues={this.props.email_message}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">

                <SelectField name="to" label="To:" placeholder="Who You Want To Send To" >
                  <option value="teachers">Teachers</option>
                  <option value="students">Students</option>
                  <option value="all">All</option>
                </SelectField>

                <TextField name="subject" label="Subject" placeholder="Enter Subject" />

                <RichField name="message" label="Message" />

                <SelectField name="status" label="When To Send" placeholder="When Do You Want To Send It" >
                  <option value="sent">Now</option>
                  <option value="created">Later</option>
                </SelectField>

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
    email_message: state.entities.email_message,
  }
}

export default connect(
  mapStateToProps, actions
)(addEmail);