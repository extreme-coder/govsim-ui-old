import React from 'react';
import { Form, Button } from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import FormWrapper from './common/FormWrapper';
import StudentClass from './StudentClass';
import * as actions from './actions/students';
import * as classActions from './actions/classes';
import * as familyActions from './actions/families';
import { Formik, Field, FieldArray } from 'formik';


class EditStudent extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  classOptions() {
    return this.props.classes.map((clas) => {
      return ({ value: clas.id, label: clas.name })
    });
  }

  saveStudent = (values) => {
    if (this.props.match.params.id == 'new') {
      this.props.addStudent(values)
    } else {
      this.props.updateStudent(values)
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
      this.props.getStudent(this.props.match.params.id);
    }
    this.props.getFamilies();
    this.setNew(this.props.match.params.id)
  }

  familyOptions() {
    return this.props.families.map((family) => {
      return ({ value: family.id, label: family.name })
    });
  }

  render() {

    return (
      <FormWrapper title="Student" isNew={this.isNew}>
        <Formik enableReinitialize onSubmit={this.saveStudent} initialValues={this.props.student}>
          {(props) => (
            <div>
              <Form noValidate onSubmit={props.handleSubmit}>
                <Form.Group controlId="formBasicName">

                  <TextField name="first_name" label="First name" placeholder="Enter First name" />

                  <TextField name="last_name" label="Last name" placeholder="Enter Last name" />

                  <DateField name="date_of_birth" label="Date of Birth" placeholder="Enter Date of Birth" />

                  <TextField name="email" label="Email" placeholder="Email" />

                  <TextField name="password" label="Password" placeholder="Password" />

                  <SelectField name="family.id" label="Family" placeholder="Family" >
                    {this.familyOptions()}
                  </SelectField>

                  <FieldArray name="student_class" component={StudentClass} />
                  <h6> </ h6>
                  <Button variant="primary" type="submit">
                    Save
                    </Button>
                </Form.Group>
              </Form>

            </div>
          )}
        </Formik>
      </FormWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    student: state.students.student,
    ...state.classes,
    ...state.families
  }
}

export default connect(
  mapStateToProps, { ...actions, ...classActions, ...familyActions }
)(EditStudent);