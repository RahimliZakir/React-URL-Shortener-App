import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Boost = () => {
  return (
    <section id="boost">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col lg="12" md="12" className="boost-col">
            <h2>Boost your links today</h2>
            {/* eslint-disable */}
            <a href="#" className="boost-btn">
              Get Started
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Boost;
