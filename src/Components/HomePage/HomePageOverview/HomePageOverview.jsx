import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import OurVision from "../OurVision/OurVision";
import CoreServices from "../CoreServices/CoreServices";
import ExploreHere from "../ExploreHere/ExploreHere";
import Clients from "../Clients/Clients";

const HomePageOverview = () => {
  return (
    <Container>
      <Banner />
      <OurVision />
      <CoreServices />
      <ExploreHere />
      <Clients />
    </Container>
  );
};

export default HomePageOverview;
