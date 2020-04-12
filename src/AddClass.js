import React from 'react';
import { Form, Button } from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import FormWrapper from './common/FormWrapper';
import * as classActions from './actions/classes';
import * as teacherActions from './actions/teachers';
import * as roomActions from './actions/rooms';
import actions from 'redux-form/lib/actions';
import { Formik } from "formik";

class AddClass extends React.Component {
  constructor(props) {
    super(props)
    this.isNew = false
  }

  saveClass = (values) => {
    if (this.props.match.params.id == 'new') {
      this.props.addClass(values)
    } else {
      this.props.updateClass(values)
    }
  }

  componentDidMount() {

    this.props.getTeachers();
    this.props.getRooms();
    if (this.props.match.params.id) {
      this.props.getClass(this.props.match.params.id);
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
    return this.props.teachers.map((teacher) => {
      return ({ value: teacher.id, label: teacher.name })
    })
  }

  roomOptions() {
    return this.props.rooms.map((room) => {
      return ({ value: room.id, label: room.name })
    })
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

                <SelectField name="teacher.id" label="Teacher" placeholder="Teacher" >
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="assistant.id" label="Assistant" placeholder="Assistant" >
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="room_for_class.id" label="Room" placeholder="Room" >
                  {this.roomOptions()}
                </SelectField>

                <TextField name="days_of_class" label="Days Of Class" placeholder="Enter Days" />

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
    class: state.classes.class,
    ...state.teachers,
    ...state.rooms
  }
}

export default connect(
  mapStateToProps, { ...classActions, ...teacherActions, ...roomActions }
)(AddClass);