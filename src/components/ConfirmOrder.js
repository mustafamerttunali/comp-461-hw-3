import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
export default function ConfirmOrder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // Table, with 4 columns: Coffee Type, Coffee Size, Coffee Quantity, Coffee Delivery Time
    // Button to confirm order
    <Container>
      <br></br>
      <h1 className="text-center">Confirm Order</h1>
      <br />
      <Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Coffee Type</th>
              <th>Coffee Size</th>
              <th>Coffee Quantity</th>
              <th>Coffee Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Espresso</td>
              <td>Middle</td>
              <td>1</td>
              <td>Now</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button variant="success" type="submit" onClick={handleShow}>
          Confirm Order
        </Button>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
