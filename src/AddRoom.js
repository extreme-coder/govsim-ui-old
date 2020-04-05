import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as actions from './actions/rooms';

class AddRoom extends React.Component {
  saveRoom = (values) => {     
    if (this.props.match.params.id == 'new') {        
      this.props.addRoom(values)          
    } else {
      this.props.updateRoom(values)
    }        
  }

  componentDidMount() {      
    if (this.props.match.params.id!= 'new') {
      this.props.getRoom(this.props.match.params.id);
    }
  }  
    render() {
      return (
        <div>
            <h3>Add Room</h3>
            <Formik enableReinitialize onSubmit={this.saveRoom}  initialValues={this.props.room}>
        {(props) => (
          <Form noValidate onSubmit={props.handleSubmit}>            
            <Form.Group controlId="formBasicName">
                    
                    <TextField name="name" label="Name" placeholder="Enter Name" />
                
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
    room: state.rooms.room
  }
}

export default connect(
  mapStateToProps, actions
)(AddRoom);