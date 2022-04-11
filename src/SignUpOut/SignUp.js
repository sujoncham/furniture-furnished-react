import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SignUp = () => {
  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h1>SignUp</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
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
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="c-password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      
      </Col>
    </Row>
  );
};

export default SignUp;
