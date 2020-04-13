import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import FormWrapper from './common/FormWrapper';
import PriceOption from './PriceOption';
import CheckBox from './CheckBox';
import * as actions from './actions/entity_actions';
import { Formik, FieldArray } from "formik";


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

                <h5>Days Of class </h5>
                <h7>Sunday</h7>
                <CheckBox name="sunday"/>
                <h7> Monday</h7>
                <CheckBox name="monday"/>
                <h7> Tuesday</h7>
                <CheckBox name="tuesday"/>
                <h7> Wenesday</h7>
                <CheckBox name="wenesday"/>
                <h7> Thursday</h7>
                <CheckBox name="thursday"/>
                <h7> Friday</h7>
                <CheckBox name="friday"/>
                <h7> Saturday</h7>
                <CheckBox name="saturday"/>

                <FieldArray name="student_class" component={PriceOption} />
                <h6> </ h6>

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
    class: state.entities.class,
    ...state.entities
  }
}

export default connect(
  mapStateToProps, actions
)(AddClass);