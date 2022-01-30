import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

const Form = () => {
  const [data, setData] = useState("");
  const [url, setUrl] = useState([]);

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
            <ul>
              {url.map((item) => {
                return <li key={item}>{item} </li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Form;
