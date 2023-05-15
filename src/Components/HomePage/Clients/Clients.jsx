import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Clients = () => {
  const fakeData = [
    "https://www.helpware.com/hubfs/DoorDash_Logo.svg",
    "https://www.helpware.com/hubfs/headspace-inc-logo-vector-cropped.svg",
    "https://www.helpware.com/hubfs/Purecars_logo-cropped.svg",
    "https://www.helpware.com/hubfs/jamcity-logo.svg",
    "https://www.helpware.com/hubfs/helpware_2021/home/Microsoft-Logo.svg",
    "https://www.helpware.com/hubfs/helpware_2021/home/Google-Logo.svg",
    "https://www.helpware.com/hubfs/zendesk-logo.svg",
    "https://www.helpware.com/hubfs/Cisco_logo_blue_2016.svg",
    "https://www.helpware.com/hubfs/samsara-networks-inc-logo-vector-cropped.svg",
    "https://www.helpware.com/hubfs/bittrex-global-vector-logo-cropped.svg",
    "https://www.helpware.com/hubfs/RestoraPet-2019-Logo.png",
    "https://www.helpware.com/hubfs/CompIQ-logo.png",
  ];
  return (
    <div className="mt-5">
      <h4 style={{ color: "#4bc3b5" }} className="text-center">
        OUR GREATEST ASSETS ARE
      </h4>
      <h1 className="text-center my-4">Our Clients</h1>
      <Row className="g-3">
        {fakeData.map((si) => {
          return (
            <Col md={3} lg={2} sm={4}>
              <Card
                style={{
                  boxShadow:
                    "0.3rem 0.3rem 0.3rem rgba(239,239,239,.67), -0.2rem -0.2rem 0.3rem #ffffff",
                  backgroundColor: "#fafafa",
                  border: "none",
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
              >
                <div className="mx-auto d-flex align-items-center justify-content-center">
                  <img
                    src={si}
                    alt=""
                    style={{ height: "80px", width: "90%" }}
                    className="p-2"
                  />
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Clients;
