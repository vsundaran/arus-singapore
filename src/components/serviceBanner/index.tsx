import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box, Container } from "@mui/material";
import ServiceAccordion from "./accordion";

const ServiceBanner: React.FC = () => {
  return (
    <Box>
      <BannerDivider label="Services" />
      <center>
        <Box mb={"44px"}>
          <GradientText labels={["Define", "Develop", "Deliver"]} />
        </Box>
      </center>
      <Container maxWidth={"xl"}>
        <ServiceAccordion />
      </Container>
    </Box>
  );
};

export default ServiceBanner;
