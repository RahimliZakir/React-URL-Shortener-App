import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6" sm="6" className="left-nav">
              <ul className="left-nav-ul">
                <li>
                  <div className="img-div">
                    {/* eslint-disable  */}
                    <a href="#">
                      <img src={logo} alt="Logo" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </Col>
            <Col xl="6" lg="6" md="6" sm="6" className="right-nav">
              <ul className="right-nav-ul">
                <li>
                  <a href="#">Login</a>
                </li>
                <li className="nav-login-li">
                  <a href="#" className="nav-login-btn">
                    Sign Up
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
