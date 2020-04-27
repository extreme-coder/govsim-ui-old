import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import TextField from './common/TextField';
import FormWrapper from './common/FormWrapper';
import * as actions from './actions/entity_actions';

const AddTeacherSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
});

class AddTeacher extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  saveTeacher = (values) => {
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('teacher', values)
    } else {
      this.props.updateEntity('teacher', values)
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
      this.props.getEntity('teacher', this.props.match.params.id);
    }
    this.setNew(this.props.match.params.id)
  }

  render() {
    return (
      <FormWrapper title="Teacher" isNew={this.isNew}>
        <Formik validationSchema={AddTeacherSchema} onSubmit={this.saveTeacher} initialValues={{ name: '', email: '' }}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">
                <TextField name="name" label="Name" placeholder="Enter Name" />
                <TextField name="email" label="Email" placeholder="Enter Email" />
                <TextField name="password" label="Password" placeholder="Enter Password" />
                <Button variant="primary" type="submit"> Save </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  teacher: state.entities.teacher
})

export default connect(
  mapStateToProps, actions
)(AddTeacher);
