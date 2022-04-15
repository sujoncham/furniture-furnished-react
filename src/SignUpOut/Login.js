import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
  <Row className="mt-5">
    <Col md={{ span: 6, offset: 3 }}>
    <h1>Login</h1>
      <Form>
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
 
        <Button variant="primary" type="submit">
          Login In
        </Button>
      </Form>
      <p>New User? Please, <Link to="/signup">Register</Link> here</p>
    </Col>
  </Row>
  );
};

export default Login;
