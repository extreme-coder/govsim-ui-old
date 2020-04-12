import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import FormWrapper from './common/FormWrapper';
import * as actions from './actions/entity_actions';

class AddRoom extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  saveRoom = (values) => {
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('room', values)
    } else {
      this.props.updateEntity('room', values)
    }
  }

  setNew(id) {
    if (id === 'new') {
      this.isNew = true
    } else {
      this.isNew = false
    }
  }

  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      this.props.getEntity('room', this.props.match.params.id);
    }
    this.setNew(this.props.match.params.id)
  }
  render() {
    return (
      <FormWrapper title="Room" isNew={this.isNew}>
        <Formik enableReinitialize onSubmit={this.saveRoom} initialValues={this.props.room}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">

                <TextField name="name" label="Name" placeholder="Enter Name" />

                <Button variant="primary" type="submit">
                  Save
                    </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    room: state.entities.room
  }
}

export default connect(
  mapStateToProps, actions
)(AddRoom);