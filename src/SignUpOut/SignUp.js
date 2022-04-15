import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameEvent = (event)=>{
      setName(event.target.value);
  }
  const handleEmailEvent = (event)=>{
    setEmail(event.target.value);
  }
  const handlePasswordEvent = (event)=>{
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
  }



  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h1>SignUp</h1>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control onBlur={handleNameEvent} type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailEvent}  type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordEvent}  type="password" name="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
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
