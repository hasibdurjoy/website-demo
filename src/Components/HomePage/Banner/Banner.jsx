import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <div>
            <h4 className="fs-3">YOUR HELPWARE</h4>
            <h1
              style={{
                fontSize: "70px",
                fontFamily: "Montserrat-Bold, sans-sefif",
                fontWeight: "700",
                fontStyle: "normal",
              }}
            >
              Amazing Customer Experiences.{" "}
              <span style={{ color: "rgb(75, 195, 181)" }}>Together.</span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              We are a digitally enabled People as a Services Outsourcer focused
              on serving high growth, new economy, market-disrupting, and
              technology companies to own interaction custody, complete complex
              tasks, and grow their brands.
            </p>
            <Button
              className="rounded-pill"
              style={{
                width: "300px",
                backgroundColor: "#4bc3b5",
                fontSize: "20px",
                border: "none",
              }}
              onClick={() => window.open("https://t.me/jehad731")}
            >
              Lets Talk
            </Button>
          </div>
        </Col>
        <Col>
          <video
            src="https://f.hubspotusercontent20.net/hubfs/3358429/Helpware-hero-video-02222022_v3.mp4"
            autoPlay={true}
            loop={true}
            muted
            controls={false}
            style={{ borderRadius: "20px" }}
          ></video>
          <div
            style={{
              position: "relative",
              top: "-88%",
              left: "-20px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
              width: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.helpware.com/hubfs/helpware-icon.svg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
