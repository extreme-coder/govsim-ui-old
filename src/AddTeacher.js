import React from 'react';
import {Form, Button} from 'react-bootstrap';

class AddTeacher extends React.Component {
    render() {
      return (
        <div>
             <h3>Add Teacher</h3>
             <Form>
             <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Name" placeholder="Name" />
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>

      );
    }
}

export default EditStudent;