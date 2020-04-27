import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import * as actions from './actions/entity_actions';
import FormWrapper from './common/FormWrapper';
import TextField from './common/TextField';

const AddLevelSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
});

class AddLevel extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  saveLevel = (values) => {
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('level', values)
    } else {
      this.props.updateEntity('level', values)
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
      this.props.getEntity('level', this.props.match.params.id);
    }
    this.setNew(this.props.match.params.id)
  }

  render() {
    return (
      <FormWrapper title="Level" isNew={this.isNew}>
        <Formik enableReinitialize validationSchema={AddLevelSchema} onSubmit={this.saveLevel} initialValues={this.props.family}>
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
  level: state.entities.level
})

export default connect(
  mapStateToProps, actions
)(AddLevel);
