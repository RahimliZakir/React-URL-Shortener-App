import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

import API from "../api";
import ShortLink from "./ShortLink";

const Form = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState([]);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (data === "") {
      setError("Please add a link");
      return;
    }

    const {
      data: { result },
    } = await API.get("/shorten", {
      params: {
        url: data,
      },
    });

    setUrl([
      ...url,
      {
        real: result.original_link,
        short: result.full_short_link,
      },
    ]);

    setData("");
    setError("");
  };

  return (
    <section id="form">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <form id="term-form" onSubmit={handleFormSubmit}>
              <div className="d-flex">
                <input
                  className={`form-control form-input ${
                    error === "" ? "" : "is-validation"
                  }`}
                  placeholder="Shorthen a link here.."
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Button type="submit">Shorten it!</Button>
              </div>
              {<p className="text-danger text-validation">{error}</p>}
            </form>
            <ListGroup>
              {url?.map((item, index) => {
                return <ShortLink item={item} index={index} />;
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
