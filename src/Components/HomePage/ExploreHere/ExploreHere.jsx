import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const ExploreHere = () => {
  return (
    <Row className="mt-5">
      <Col
        md={6}
        sm={12}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="d-flex flex-column gap-3">
          <h2 style={{ color: "#4bc3b5" }}>EXPLORE HELPWARE</h2>
          <h1 style={{ fontSize: "50px" }}>
            Let’s chat about business process outsourcing for success
          </h1>
          <Button
            className="rounded-pill"
            style={{
              width: "300px",
              backgroundColor: "#4bc3b5",
              fontSize: "20px",
            }}
          >
            Let's get started
          </Button>
        </div>
      </Col>
      <Col
        md={6}
        sm={12}
        className="d-flex align-items-center justify-content-end"
      >
        <div
          style={{
            backgroundColor: "#9A87E9",
            borderRadius: "20px",
            width: "90%",
          }}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="https://www.helpware.com/hubfs/Helpware-Anton-2.png"
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
};

export default ExploreHere;
