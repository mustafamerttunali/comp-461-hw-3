import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function AddNewProduct() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      productId: productId,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
      },
    };

    try {
      const response = await fetch(
        "https://mustafamerttunali--comp-464-homework3-api-app.modal.run/admin/coffee",
        {
          method: "POST",
          body: JSON.stringify(productData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Product added successfully! Redirecting to home page...");
      // window.location.href = "/";
    } catch (error) {
      console.error("Error submitting product:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Container>
      <br />
      <h1 className="text-center">Add New Product [ADMIN]</h1>
      <h5 className="text-center">Add new product to the database.</h5>
      <br />
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductID">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formSmallPrice">
            <Form.Label>Small Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter small price"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMediumPrice">
            <Form.Label>Medium Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter medium price"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
