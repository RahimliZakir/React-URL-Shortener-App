import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import logo from "../assets/images/logo.svg";

const Header = () => {
  const [miniNavShow, setMiniNavShow] = useState(false);

  const miniNavClasses = classNames("mini-nav-box", {
    vis: miniNavShow,
  });

  const handleMiniNav = () => {
    if (miniNavShow) setMiniNavShow(false);
    else setMiniNavShow(true);
  };

  return (
    <header>
      <nav>
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6" sm="6" className="left-nav col-6">
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
            <Col sm="6" className="right-mini-nav col-6">
              <button className="bar-btn" onClick={handleMiniNav}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </Col>
            <div sm="12" className={miniNavClasses}>
              <Container className="mini-nav-box-container">
                <div className="mini-nav-inner-box rounded">
                  <ul className="left-items">
                    <li>
                      <a>Features</a>
                    </li>
                    <li>
                      <a>Pricing</a>
                    </li>
                    <li>
                      <a>Resources</a>
                    </li>
                  </ul>
                  <ul className="right-items">
                    <li>
                      <a>Login</a>
                    </li>
                    <li>
                      <a className="login-btn rounded-pill">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
