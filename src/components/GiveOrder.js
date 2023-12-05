import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function GiveOrder() {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const [coffeeSize, setCoffeeSize] = useState("Middle");
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const [deliveryTime, setDeliveryTime] = useState("Now");

  useEffect(() => {
    fetch(
      "https://mustafamerttunali--comp-464-homework3-api-app.modal.run/coffee"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeTypes(data);
        if (data.length > 0) {
          setSelectedCoffeeType(data[0].name);
        }
      })
      .catch((error) => console.error("Error fetching coffee types:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve customer ID from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    const customerId = userData ? userData.uid : null;

    if (!customerId) {
      alert("You must be logged in to place an order.");
      window.location.href = "/login";
      return;
    }

    const orderData = {
      customer_id: customerId,
      items: {
        coffeeType: selectedCoffeeType,
        coffeeSize,
      },
      coffee_quantity: coffeeQuantity,
      delivery_time: deliveryTime,
    };

    try {
      const response = await fetch(
        "https://mustafamerttunali--comp-464-homework3-api-app-dev.modal.run/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error during order placement:", error.message);
      alert("Error placing order: " + error.message);
    }
  };

  return (
    <Container>
      <br></br>
      <h1 className="text-center">Give Order</h1>
      <h5 className="text-center">
        Select your coffee type, size, quantity, and delivery time.
      </h5>
      <br />
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCoffeeType">
            <Form.Label>Coffee Type</Form.Label>
            <Form.Control
              as="select"
              value={selectedCoffeeType}
              onChange={(e) => setSelectedCoffeeType(e.target.value)}
            >
              {coffeeTypes.map((coffee, index) => (
                <option key={index} value={coffee.name}>
                  {coffee.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formCoffeeSize">
            <Form.Label>Coffee Size</Form.Label>
            <Form.Control
              as="select"
              value={coffeeSize}
              onChange={(e) => setCoffeeSize(e.target.value)}
            >
              <option value="Middle">Middle</option>
              <option value="Tall">Tall</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formCoffeeQuantity">
            <Form.Label>Coffee Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter coffee quantity"
              value={coffeeQuantity}
              onChange={(e) => setCoffeeQuantity(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDeliveryTime">
            <Form.Label>Coffee Delivery Time</Form.Label>
            <Form.Control
              as="select"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            >
              <option value="Now">Now</option>
              <option value="In a hour">In an hour</option>
            </Form.Control>
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
