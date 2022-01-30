import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useCopyClipboard } from "../hooks";

const Form = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState([]);
  const [copyClipboard] = useCopyClipboard();
  const [term, setTerm] = useState("");

  const handleCopy = () => {
    setTerm(term);
  };

  const handleInput = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .get("https://api.shrtco.de/v2/shorten", {
        params: {
          url: data,
        },
      })
      .then((res) => setUrl([...url, res.data.result.full_short_link]));
  };

  return (
    <section id="form">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <form id="term-form" className="d-flex" onSubmit={handleFormSubmit}>
              <input
                className="form-control form-input"
                placeholder="Shorthen a link here!"
                value={data}
                onChange={handleInput}
              />
              <Button type="submit">Shorten it!</Button>
            </form>
            <ListGroup>
              {url.map((item) => {
                return (
                  <ListGroup.Item key={item}>
                    <a href={item} target="_blank" rel="noreferrer">
                      {item}
                    </a>
                    <Button variant="warning" onClick={handleCopy}>
                      Copy
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
