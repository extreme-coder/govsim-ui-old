import { FieldArray, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './actions/entity_actions';
import DateField from './common/DateField';
import FamilyFields from './common/FamilyFields';
import FormWrapper from './common/FormWrapper';
import SelectField from './common/SelectField';
import TextField from './common/TextField';
import StudentClass from './StudentClass';


class EditStudent extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
    this.handleClick = this.handleClick.bind(this)
    this.state = { familyFieldOpen: false }
  }

  classOptions() {
    return this.props.classes.map((clas) => ({ value: clas.id, label: clas.name }));
  }

  saveStudent = (values) => {
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('student', values)
    } else {
      this.props.updateEntity('student', values)
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
      this.props.getEntity('student', this.props.match.params.id);
    }
    this.props.getEntities('family');
    this.props.getEntities('level');
    this.setNew(this.props.match.params.id)
  }

  familyOptions() {
    return this.props.families.map((family) => ({ value: family.id, label: family.family_name }));
  }

  levelOptions() {
    return this.props.levels.map((level) => ({ value: level.id, label: level.name }))
  }

  handleClick() {
    this.setState({ familyFieldOpen: true })
  }

  render() {
    return (
      <FormWrapper title="Student" isNew={this.isNew}>
        <Formik enableReinitialize onSubmit={this.saveStudent} initialValues={this.props.student}>
          {(props) => (
            <div>
              <Form noValidate onSubmit={props.handleSubmit}>
                <Form.Group controlId="formBasicName">

                  <TextField required name="first_name" label="First name" placeholder="Enter First name" />

                  <TextField name="last_name" label="Last name" placeholder="Enter Last name" />

                  <DateField name="date_of_birth" label="Date of Birth" placeholder="Enter Date of Birth" />

                  <TextField name="email" label="Email" placeholder="Email" />

                  <TextField name="password" label="Password" placeholder="Password" />

                  <SelectField name="level.id" label="Level" placeholder="Level">
                    {this.levelOptions()}
                  </SelectField>

                  <FieldArray name="student_class" component={StudentClass} />
                  <h6> </h6>

                  {(() => {
                    if (this.state.familyFieldOpen) {
                      return <FamilyFields parent={this} />;
                    }
                    return (
                      <div>
                        <SelectField name="family.id" label="Family" placeholder="Family">
                          {this.familyOptions()}
                        </SelectField>

                        <Button variant="primary" onClick={this.handleClick}>
                          Add New Family
                        </Button>

                        <h6> </h6>
                      </div>
                    )
                  })()}


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

const mapStateToProps = (state) => ({
  student: state.entities.student,
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(EditStudent);
