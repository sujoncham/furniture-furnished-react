import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import auth from "../Firebase/Firebase.init";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCorfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleNameEvent = (event) => {
    setName(event.target.value);
  };
  const handleEmailEvent = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordEvent = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmEvent = (event) => {
    setCorfirmPassword(event.target.value);
  };

  const handleRegistered = (event) =>{
    setRegistered(event.target.checked);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (password) {
      setSuccess("successfull");
    } else {
      setSuccess("unsuccessfull");
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("please one upper character provided");
      return;
    }
    setValidated(true);
    setError("");

    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        setError(error.message);
      });
    } else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setEmail("");
        setPassword("");
        EmailVerification();
        updateNameUser();
      })
      .catch((error) => {
        setError(error.message);
      });
    }

    
  };

  const handlePasswordReset = ()=>{
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      console.log("sent email to reset");
    })
    .catch((error)=>{
      setError(error.message);
    })
  }

  const updateNameUser = () =>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
        console.log('updating name');
    }).catch((error) => {
      setError(error.message);
    });
  }

  const EmailVerification = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log("Email verification sent");
    })
  }

  return (
    <Row className="mt-5">
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Please, {registered ? 'Login' : 'Register'}</h1>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          { !registered && <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              onBlur={handleNameEvent}
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailEvent}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordEvent}
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <p className="text-success">{success}</p>
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
          { !registered && <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              onBlur={handleConfirmEvent}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegistered} type="checkbox" label="Already registered" />
          </Form.Group>
          <Button onClick={handlePasswordReset} variant="link">Forgot Password?</Button>
          <br />

          <Button variant="primary" type="submit">
          {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
