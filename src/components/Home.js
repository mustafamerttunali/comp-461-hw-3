import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(
      "https://mustafamerttunali--comp-464-homework3-api-app.modal.run/coffee"
    )
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Card width={512} style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="coffee_background.jpg"
                height={624}
              />
              <Card.Body>
                <Card.Text
                  className="h1 text-center"
                  style={{
                    fontSize: "120px",
                    zIndex: 1,
                    position: "absolute",
                    width: "75%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    color: "white",
                    backgroundColor: "black",
                    opacity: "0.9",
                    fontWeight: "bold",
                    padding: "20px",
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 100%)",

                    borderRadius: "50px",
                    boxShadow: "0 0 10px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  Feel the energy. <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
            <h1 className="text-center">We serve different types of coffee.</h1>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingLeft: "8%",
            paddingBottom: "20px",
          }}
        >
          {coffees.map((coffee, index) => (
            <Col
              key={index}
              md={4}
              style={{
                paddingBottom: "20px",
              }}
            >
              <Card border="dark" style={{ width: "20rem" }}>
                <Card.Header
                  className="text-center"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  <FontAwesomeIcon icon={faStar} /> New
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={`${coffee.product_id}.png`} // Dynamically setting the image source based on product_id
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{coffee.name}</Card.Title>
                  <Card.Text>
                    Enjoy a delightful cup of {coffee.name}.
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  S:${coffee.prices.small} - M:${coffee.prices.medium}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
