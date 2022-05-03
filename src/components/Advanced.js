import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import brand from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const Advanced = () => {
  return (
    <section id="advanced">
      <Container>
        <Row>
          <h2 className="text-center top-heading">Advanced Statistics</h2>
          <p className="text-center top-paragraph">
            Track how are your links are performing across the web with our
            advanced statistics dashboard.
          </p>
          <div className="line"></div>
          <Col xl="4" lg="4" md="4" sm={12} className="cards-col">
            <div className="custom-card first-custom-card">
              <div className="img-div">
                <img src={brand} alt="Brand" />
              </div>
              <h5>Brand Recognition</h5>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </Col>
          <Col xl="4" lg="4" md="4" sm={12} className="cards-col">
            <div className="custom-card second-custom-card">
              <div className="img-div">
                <img src={detailed} alt="Detailed" />
              </div>
              <h5>Detailed Records</h5>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </Col>
          <Col xl="4" lg="4" md="4" sm={12} className="cards-col">
            <div className="custom-card third-custom-card">
              <div className="img-div">
                <img src={fully} alt="Fully" />
              </div>
              <h5>Fully Customizable</h5>
              <p>
                Improve brand awarness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Advanced;
