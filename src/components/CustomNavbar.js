import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  const isLoggedIn = localStorage.getItem("userData") !== null;

  return (
    <Container>
      <Navbar
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
        }}
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Navbar.Brand href="/">
          <FontAwesomeIcon fontSize={26} icon={faMugHot} />
          &nbsp;Apollo Coffee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link href="/admin/add-new-product">Add Product</Nav.Link>
                <Nav.Link href="/user-orders">User Orders</Nav.Link>
                <Nav.Link href="/give-order">Give Order</Nav.Link>
              </>
            ) : (
              <div className="d-flex">
                <Button href="/sign-up" variant="secondary">
                  Sign Up
                </Button>
                <h5>&nbsp;&nbsp;&nbsp;</h5>
                <Button href="/login" variant="dark">
                  Login
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
