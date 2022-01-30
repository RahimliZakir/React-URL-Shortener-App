import React, { useState } from "react";
import API from "../api";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { useCopyClipboard } from "../hooks";

const Form = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState([]);

  const [isCopied, copyClipboard] = useCopyClipboard();

  const handleCopy = (val) => {
    copyClipboard(val);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <section id="form">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <form id="term-form" className="d-flex" onSubmit={handleFormSubmit}>
              <input
                className="form-control form-input"
                placeholder="Shorthen a link here.."
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <Button type="submit">Shorten it!</Button>
            </form>
            <ListGroup>
              {url?.map((item, index) => {
                return (
                  <ListGroup.Item key={index + 1}>
                    <span>Shorten:</span>
                    <a href={item.short} target="_blank" rel="noreferrer">
                      {item.short}
                    </a>
                    <span className="ms-2">Real: {item.real}</span>
                    <Button
                      variant={isCopied ? "primary" : "warning"}
                      className="copy-btn"
                      onClick={() => handleCopy(item.short)}
                    >
                      {isCopied ? "Copied" : "Copy"}
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
