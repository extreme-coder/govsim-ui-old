import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as roomActions from './actions/rooms';

class AddRoom extends React.Component {
    addRoom = (values) => {
        console.log(values)
        this.props.addRoom(values)
    }

    render() {
      return (
        <div>
            <h3>Add Room</h3>
            <form onSubmit={this.props.handleSubmit(this.addRoom)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="name" component={TextField} label="Name" placeholder="Enter Name" />
            
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </form>
        </div>
      );
    }
}

AddRoom = connect(
  null, roomActions
)(AddRoom);

export default reduxForm({form: 'add_room_form', enableReinitialize: true})(AddRoom);