import { FieldArray, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormLabel, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './actions/entity_actions';
import DateField from './common/DateField';
import FormWrapper from './common/FormWrapper';
import SelectField from './common/SelectField';
import TextField from './common/TextField';
import ToggleButton from './common/ToggleButton';
import PriceOptions from './PriceOptions';


class AddClass extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  saveClass = (values) => {
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('class', values)
    } else {
      this.props.updateEntity('class', values)
    }
  }

  componentDidMount() {
    this.props.getEntities('teacher');
    this.props.getEntities('room');
    if (this.props.match.params.id !== 'new') {
      this.props.getEntity('class', this.props.match.params.id);
    } else {
      this.props.class.price_option = [{}]
    }
    this.setNew(this.props.match.params.id)
  }

  setNew(id) {
    if (id === 'new') {
      this.isNew = true
    } else {
      this.isNew = false
    }
  }

  teacherOptions() {
    return this.props.teachers.map((teacher) => ({ value: teacher.id, label: teacher.name }))
  }

  roomOptions() {
    return this.props.rooms.map((room) => ({ value: room.id, label: room.name }))
  }

  render() {
    return (
      <FormWrapper title="Class" isNew={this.isNew}>
        <Formik enableReinitialize onSubmit={this.saveClass} initialValues={this.props.class}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">
                <TextField name="name" label="Name" placeholder="Enter Name" />

                <TextField name="start_time" label="StartTime" placeholder="Enter Start Time" />

                <TextField name="end_time" label="End Time" placeholder="Enter End Time" />

                <DateField name="start_date" label="Start Date" placeholder="Enter Start Date" />

                <DateField name="end_date" label="End Date" placeholder="Enter End Date" />

                <SelectField name="teacher.id" label="Teacher" placeholder="Teacher">
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="assistant.id" label="Assistant" placeholder="Assistant">
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="room_for_class.id" label="Room" placeholder="Room">
                  {this.roomOptions()}
                </SelectField>


                <FormLabel>Days Of class</FormLabel>
                <InputGroup>
                  <ToggleButton name="days_of_week.sunday" label="Su" />

                  <ToggleButton name="days_of_week.monday" label="Mo" />

                  <ToggleButton name="days_of_week.tuesday" label="Tu" />

                  <ToggleButton name="days_of_week.wenesday" label="We" />

                  <ToggleButton name="days_of_week.thursday" label="Th" />

                  <ToggleButton name="days_of_week.friday" label="Fr" />

                  <ToggleButton name="days_of_week.saturday" label="Sa" />
                </InputGroup>


                <FieldArray name="price_option" component={PriceOptions} />
                <h6> </h6>

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
  class: state.entities.class,
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(AddClass);
