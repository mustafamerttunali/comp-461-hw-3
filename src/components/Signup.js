import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://mustafamerttunali--comp-464-homework3-api-app.modal.run/user/sign_up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Handle success (e.g., show success message, redirect, etc.)
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Container>
      <br></br>
      <h1 className="text-center">Sign Up</h1>
      <h5 className="text-center">
        Create your account. It's free and only takes a minute.
      </h5>
      <br />
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Signup;
