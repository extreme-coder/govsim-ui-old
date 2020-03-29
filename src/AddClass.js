import React from 'react';
import {Form, Button} from 'react-bootstrap';
import renderDatePicker from "./common/RenderDatePicker";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as classActions from './actions/classes';
import * as teacherActions from './actions/teachers';

class AddClass extends React.Component {
    addClass = (values) => {
      console.log(values)
      this.props.addClass(values)
    }

    componentDidMount() {
      this.props.getTeachers();
    }

    teacherOptions() {
      return this.props.teachers.map((teacher) => {
        return <option key={teacher.id} value={teacher.id}>{teacher.Name}</option>
      })
    }

    render() {
      return (
        <div>
            <h3>Add Class</h3>
            <form onSubmit={this.props.handleSubmit(this.addClass)}>
              <Form.Group controlId="formBasicName">
                    
                <Field name="Name" component={TextField} label="Name" placeholder="Enter Name" />

                <Field name="StartTime" component={TextField} label="StartTime" placeholder="Enter Start Time" />

                <Field name="Endtime" component={TextField} label="End Time" placeholder="Enter End Time" />

                <Field name="StartDate" component={renderDatePicker} label="Start Date" placeholder="Enter Start Date" />

                <Field name="EndDate" component={renderDatePicker} label="End Date" placeholder="Enter End Date" />

                <Field name="Teacher" component={SelectField} label="Teacher" placeholder="Teacher" >
                  <option></option>
                  {this.teacherOptions()}
                </Field>

                <Field name="RoomForClass" component={TextField} label="Room" placeholder="Enter Room" />

                <Field name="DaysOfClass" component={TextField} label="Days Of Class" placeholder="Enter Days" />
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

const mapStateToProps = state => {
  return {
    ...state.teachers
  };
}

AddClass = connect(
  mapStateToProps, {...classActions,...teacherActions}
)(AddClass);

export default reduxForm({form: 'add_class_form', enableReinitialize: true})(AddClass);