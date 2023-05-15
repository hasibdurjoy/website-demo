import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import LearnMoreButton from "../../Reusable/LearnMoreButton/LearnMoreButton";
import { ArrowRight } from "@phosphor-icons/react";

const CoreServices = () => {
  const fakeData = [
    {
      id: 1,
      title: "Group Digital Customer Experience",
      details:
        "We offer business process outsourcing that drives brand loyalty including Call Center, Answering Service, Chat, Technical, and Email support.",
      image: "https://www.helpware.com/hubfs/Group.png",
    },
    {
      id: 2,
      title: "Content-Control-and-Verification",
      details:
        "Helpware offers business process outsourcing and technology safeguards including Content Moderation, Fraud Prevention, Abuse Detection, and Profile Impersonation Monitoring.",
      image:
        "https://www.helpware.com/hubfs/Content-Control-and-Verification.svg",
    },
    {
      id: 3,
      title: "AI Operations",
      details:
        "We collect, annotate, and analyze large volumes of data spanning Image Processing, Video Annotation, Data Tagging, Data Digitization, and Natural Language Processing (NLP).",
      image: "https://www.helpware.com/hubfs/AI-Operations.svg",
    },
    {
      id: 4,
      title: "Back-Office Support",
      details:
        "Our expertise is back-office support and transaction processes across Research, Order Processing, Data Entry, Account Setup, Annotation, Content Moderation, and QA.",
      image:
        "https://www.helpware.com/hubfs/helpware_2021/Services/back-office-support-icon%201.svg",
    },
    {
      id: 5,
      title: "Taskware",
      details:
        "We drive the best in machine learning, data modeling, insurance, and transportation verification, and content labeling and moderation.",
      image: "https://www.helpware.com/hubfs/taskware-logo-icon.svg",
    },
    {
      id: 6,
      title: "Human in the Loop",
      details:
        "Helpware provides creating both learning and experience models: Driving outcomes through fully integrated API human task support.",
      image: "https://www.helpware.com/hubfs/Human-in-the-Loop-logo.svg",
    },
  ];
  return (
    <div className="mt-5">
      <h2 className="text-center" style={{ color: "#4bc3b5" }}>
        HELPWARE EXPERTISE
      </h2>
      <h1 className="text-center my-3">Core Services</h1>
      <div>
        <Row className="g-4">
          {fakeData.map((fd) => {
            return <SingleCars fd={fd} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default CoreServices;

const SingleCars = ({ fd }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Col md={4} sm={12}>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-100"
        style={{
          boxShadow:
            "0.3rem 0.3rem 0.3rem rgba(239,239,239,.67), -0.2rem -0.2rem 0.3rem #ffffff",
          border: "none",
          padding: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          backgroundColor: "#fafafa",
        }}
      >
        <Card.Body>
          <div className="d-flex align-items-center gap-4">
            <img src={fd.image} alt="" height="40px" />
            <h3 style={{ fontWeight: "700", color: "#373838", opacity: "0.7" }}>
              {fd.title}
            </h3>
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "#373838",
              paddingRight: "40px",
              opacity: "0.6",
            }}
          >
            {fd.details}
          </p>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0">
          <Button
            className="bg-transparent border-0  "
            style={{ color: "#4bc3b5" }}
          >
            <span style={{ marginRight: isHovered ? "30px" : "20px" }}>
              Learn More
            </span>
            <ArrowRight size={24} />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
