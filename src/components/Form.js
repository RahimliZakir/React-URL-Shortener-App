import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

import API from "../api";
import ShortLink from "./ShortLink";

const Form = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState([]);
  const [error, setError] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
          <Col xl="8" lg="8" md="10" sm="10" className="form-col">
            <form id="term-form" onSubmit={handleFormSubmit}>
              <div className="input-btn-group d-flex">
                <input
                  ref={inputRef}
                  className={`form-control form-input ${
                    error === "" ? "" : "is-validation"
                  }`}
                  placeholder="Shorthen a link here.."
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <Button type="submit" className="rounded">
                  Shorten it!
                </Button>
              </div>
              {<p className="text-danger text-validation">{error}</p>}
            </form>
            <ListGroup>
              {url?.map((item, index) => (
                <ShortLink item={item} key={index + 1} />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
