import { ArrowRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const LearnMoreButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      className="bg-transparent border-0  "
      style={{ color: "#4bc3b5" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ marginRight: isHovered ? "30px" : "20px" }}>
        Learn More
      </span>
      <ArrowRight size={24} />
    </Button>
  );
};

export default LearnMoreButton;
