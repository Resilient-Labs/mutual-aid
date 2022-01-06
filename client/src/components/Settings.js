import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/Settings.css';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <Form action="/settings" method="POST">
          <h5>Change Name</h5>
          <Form.Group className="mb-3" controlId="formFirstNameChange">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastNameChange">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
            ></Form.Control>
          </Form.Group>
          <h5>Change Email</h5>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Current Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter current email" />

            <Form.Label>New Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter new email" />
          </Form.Group>

          <h5>Change Password</h5>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter current password"
            />

            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" />
          </Form.Group>

          <h5>New Phone Number</h5>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control type="text" placeholder="Enter new number" />
          </Form.Group>

          <h5>Credit/Debit Card</h5>
          <Form.Group className="mb-3" controlId="formBasicPaymentOption">
            {/* To get radio to work, add name='string' and make sure
                            they're all in the same group ex: name='group 1'
                        */}
            <Form>
              <div className="mb-3">
                <Form.Check label="Credit Card" name="group1" type="radio" />
                <Form.Check label="Debit Card" name="group1" type="radio" />
                <Form.Check label="PayPal" type="radio" name="group1" />
              </div>
            </Form>

            <h5>Name on card</h5>
            <Form.Group className="mb-3" controlId="formBasicNameCard">
              <Form.Control
                type="text"
                placeholder="Full name as displayed on card"
              />
            </Form.Group>

            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control type="text" placeholder="" />

            <Form.Label>Expiration</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save settings
          </Button>
        </Form>
      </div>
    );
  }
}
