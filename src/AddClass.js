import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DateField from "./common/DateField";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as classActions from './actions/classes';
import * as teacherActions from './actions/teachers';
import * as roomActions from './actions/rooms';
import actions from 'redux-form/lib/actions';
import { Formik } from "formik";

class AddClass extends React.Component {
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
    }

    teacherOptions() {
      return this.props.teachers.map((teacher) => {
        return <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
      })
    }

    roomOptions() {
      return this.props.rooms.map((room) => {
        return <option key={room.id} value={room.id}>{room.name}</option>
      })
    }

    render() {
      return (
        <div>
            <h3>Add Class</h3>
            <Formik enableReinitialize onSubmit={this.saveClass}  initialValues={this.props.class}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>            
                <Form.Group controlId="formBasicName">     
                <TextField name="name" label="Name" placeholder="Enter Name" />

                <TextField name="start_time" label="StartTime" placeholder="Enter Start Time" />

                <TextField name="end_time" label="End Time" placeholder="Enter End Time" />

                <DateField name="start_date" label="Start Date" placeholder="Enter Start Date" />

                <DateField name="end_date" label="End Date" placeholder="Enter End Date" />

                <SelectField name="teacher" label="Teacher" placeholder="Teacher" >
                  <option></option>
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="assistant" label="Assistant" placeholder="Assistant" >
                  <option></option>
                  {this.teacherOptions()}
                </SelectField>

                <SelectField name="room_for_class" label="Room" placeholder="Room" >
                  <option></option>
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
        </div>

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

export default  connect(
  mapStateToProps, {...classActions,...teacherActions, ...roomActions}
)(AddClass);