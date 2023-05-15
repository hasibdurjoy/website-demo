import React from "react";
import { Col, Row } from "react-bootstrap";
import LearnMoreButton from "../../Reusable/LearnMoreButton/LearnMoreButton";

const OurVision = () => {
  return (
    <div>
      <Row>
        <Col
          md={6}
          lg={6}
          sm={12}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="https://www.helpware.com/hubfs/our-vision-block.jpg"
            alt=""
            style={{ height: "500px", width: "80%", borderRadius: "20px" }}
          />
        </Col>
        <Col
          md={6}
          lg={6}
          sm={12}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ fontSize: "22px", color: "#4bc3b5" }}>
              HELPWARE PHILOSOPHY
            </div>
            <h1>Our Vision</h1>
            <p style={{ fontSize: "20px" }}>
              Helpware’s vision is delivering relentless consumer empowerment
              and experience interactions through API and integration enabled
              human task services.
            </p>
            <p style={{ fontSize: "20px" }}>
              We partner with the best and fastest-growing brands in the world
              to consistently create superior customer experiences.
            </p>
            <p style={{ fontSize: "20px" }}>
              Together we grow, together we give back, together we scale.
            </p>
            <div>
              <LearnMoreButton />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurVision;
