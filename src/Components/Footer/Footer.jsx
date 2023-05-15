import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="mt-5 mx-5 g-2" style={{ opacity: "0.6" }}>
      <Col md={4} sm={6}>
        <h1>Nextgen Marketing</h1>
        <p>
          We are a fast growing, fun loving team of creative thinkers and
          passionate collaborators.
        </p>
        <div>
          <img
            src="https://www.helpware.com/hubfs/helpware_2021/location/clutch-footer1.png"
            alt=""
          />
          <img
            src="https://www.helpware.com/hubfs/helpware_2021/location/goodfirms-footer1.png"
            alt=""
          />
          <img
            src="https://www.helpware.com/hubfs/helpware_2021/location/manifest-footer1.png"
            alt=""
          />
        </div>
      </Col>
      <Col md={2} sm={6}>
        <h5>Services</h5>
        <p>Digital Customer Experience</p>
        <p>Content Control & Verification</p>
        <p>AI Operations</p>
        <p>Back-Office Support</p>
        <p>Taskware</p>
        <p>Human In The Loop</p>
        <p>Digital Marketing Support</p>
        <p>Cybersecurity Management</p>
        <p>Start-Up Acceleration</p>
      </Col>
      <Col md={2} sm={6}>
        <h5>Industries</h5>
        <p> Ecommerce & Retail</p>
        <p>SaaS & Software</p>
        <p>HealthCare & HealthTech</p>
        <p>Gaming & Entertainment</p>
        <p>FinTech</p>
        <p>Social Media</p>
        <p>On-Demand: Food, Personal, Transportation</p>
        <p>Public Sector</p>
      </Col>
      <Col md={2} sm={6}>
        <h5>Locations</h5>
        <p> USA</p>
        <p>Ukraine</p>
        <p>Mexico</p>
        <p>Germany</p>
        <p>Philippines</p>
        <p>Poland</p>
        <p>Albania</p>
        <p>Puerto Rico</p>
        <p>Uganda</p>
        <p>Helpware at Home</p>
      </Col>
      <Col md={2} sm={6}>
        <h5>Pricing</h5>
        <p> Pricing Plans</p>
        <p>Company</p>
        <p>Our Story</p>
        <p>Vision</p>
        <p>Our Advantage</p>
        <p>Digital Integrations</p>
        <p>Meet The Team</p>
        <p>Careers</p>
        <p>Insights</p>
        <p>Blog</p>
        <p>Newsroom</p>
      </Col>
    </Row>
  );
};

export default Footer;
