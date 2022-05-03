import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        {/* eslint-disable */}
        <Row>
          <Col xl="3" lg="3" md="3" sm="12" className="footer-logo-col">
            <h4>Shortly</h4>
          </Col>
          <Col xl="2" lg="2" md="2" sm="12" className="footer-list-col">
            <h6>Features</h6>
            <ul>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </Col>
          <Col xl="2" lg="2" md="2" sm="12" className="footer-list-col">
            <h6>Resources</h6>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </Col>
          <Col xl="2" lg="2" md="2" sm="12" className="footer-list-col">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xl="3" lg="3" md="3" sm="12" className="footer-icons-col">
            <ul>
              <li>
                <div className="img-div">
                  <a href="#">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </div>
              </li>
              <li>
                <div className="img-div">
                  <a href="#">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </div>
              </li>
              <li>
                <div className="img-div">
                  <a href="#">
                    <img src={pinterest} alt="Pinterest" />
                  </a>
                </div>
              </li>
              <li>
                <div className="img-div">
                  <a href="#">
                    <img src={instagram} alt="Instagram" />
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
