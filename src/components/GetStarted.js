import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import illustration from "../assets/images/illustration-working.svg";

const GetStarted = () => {
  return (
    <section id="get-started">
      <Container>
        <Row>
          <Col lg="6" md="6" className="get-started-left">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            {/* eslint-disable */}
            <a href="#" className="get-started-btn">
              Get Started
            </a>
          </Col>
          <Col lg="6" md="6" className="get-started-right">
            <div className="img-div">
              <img src={illustration} alt="Illustration" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
