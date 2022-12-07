import { Row, Col, Button, ListGroup } from "react-bootstrap";
import classNames from "classnames";

import { useCopyClipboard } from "../hooks";

const ShortLink = ({ item }) => {
  const [isCopied, copyClipboard] = useCopyClipboard(2150);

  const handleCopy = (val) => {
    copyClipboard(val);
  };

  const btnClass = classNames("copy-btn", {
    copied: isCopied,
  });

  return (
    <ListGroup.Item className="mt-3">
      <Row className="align-items-center">
        <Col xl="6" lg="6" md="6" sm="12" className="link-response-left">
          <p className="link-response-left-link-text">{item.real}</p>
        </Col>
        <Col xl="6" lg="6" md="6" sm="12" className="link-response-right">
          <a
            href={item.short}
            target="_blank"
            rel="noreferrer"
            className="me-3"
            style={{ color: "#2CD0CE" }}
          >
            {item.short}
          </a>
          <Button
            variant={"warning"}
            className={btnClass}
            onClick={() => handleCopy(item.short)}
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ShortLink;
