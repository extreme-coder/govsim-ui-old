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
            <form onSubmit ={this.props.handleSubmit(this.saveClass)}>
              <Form.Group controlId="formBasicName">
                    
                <Field name="name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="start_time" component={TextField} label="StartTime" placeholder="Enter Start Time" />

                <Field name="end_time" component={TextField} label="End Time" placeholder="Enter End Time" />

                <Field name="start_date" component={DateField} label="Start Date" placeholder="Enter Start Date" />

                <Field name="end_date" component={DateField} label="End Date" placeholder="Enter End Date" />

                <Field name="teacher" component={SelectField} label="Teacher" placeholder="Teacher" >
                  <option></option>
                  {this.teacherOptions()}
                </Field>

                <Field name="room_for_class" component={SelectField} label="Room" placeholder="Room" >
                  <option></option>
                  {this.roomOptions()}
                </Field>

                <Field name="days_of_class" component={TextField} label="Days Of Class" placeholder="Enter Days" />
            
                <Button variant="primary" type="submit">
                    Save
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

const mapStateToProps = state => {
  return {
    initialValues: state.classes.class,
    ...state.teachers,
    ...state.rooms
  }
}

AddClass = reduxForm({form: 'add_class_form', enableReinitialize: true})(AddClass);

export default  connect(
  mapStateToProps, {...classActions,...teacherActions, ...roomActions}
)(AddClass);