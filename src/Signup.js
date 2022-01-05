import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';

export default class Signup extends Component {
    render() {
        return (
            <div>
              <h1>Sign Up</h1>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicFirst">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLast">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPronouns">
                  <Form.Label>Pronouns</Form.Label>
                  <Form.Control type="text" placeholder="If you would like to share" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I have agreed to the Terms & Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Join
                </Button>
              </Form>
            </div>
        );
    }
}