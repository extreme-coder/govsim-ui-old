import React from 'react';
import {Form, Button} from 'react-bootstrap';

class EditStudent extends React.Component {
    render() {
      return (
        <div>
             <h3>Create new student</h3>
             <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="First name" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="Last name" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group controlId="formBasicDate">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="Date of birth" placeholder="Enter date of birth" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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