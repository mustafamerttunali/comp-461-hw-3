import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch recent orders
    fetch(
      "https://mustafamerttunali--comp-464-homework3-api-app.modal.run/order/recent"
    )
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const handleConfirmOrder = (orderId) => {
    // Implement logic to confirm the order
    console.log("Confirming order:", orderId);
    // Add API call to update order status here
  };

  return (
    <Container>
      <h1 className="text-center">Recent Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Coffee Type</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.items.coffeeType}</td>
              <td>{order.coffee_quantity}</td>
              <td>{order.items.coffeeSize}</td>
              <td>{order.delivery_time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
