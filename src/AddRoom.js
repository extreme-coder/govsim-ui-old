import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import * as actions from './actions/entity_actions';
import FormWrapper from './common/FormWrapper';
import TextField from './common/TextField';

const AddRoomSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
});

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
        <Formik enableReinitialize validationSchema={AddRoomSchema} onSubmit={this.saveRoom} initialValues={this.props.room}>
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

const mapStateToProps = (state) => ({
  room: state.entities.room
})

export default connect(
  mapStateToProps, actions
)(AddRoom);
