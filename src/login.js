import React from 'react';
import {Form, Button} from 'react-bootstrap';

class Login extends React.Component {
    render() {
      return (
        <div>
             <h3>Log In</h3>
             <Form>
             <Form.Group controlId="formBasicName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="First name" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="Last name" placeholder="Enter last name" />
                    </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>

      );
    }
}

export default Login;