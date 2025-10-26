import React from "react";
import Header from "../../components/header";
import { Box } from "@mui/material";
import Banner from "../../components/banner";
import ServiceBanner from "../../components/serviceBanner";
import AboutBanner from "../../components/aboutBanner";
import PeopleBanner from "../../components/peopleBanner";
import OrganisationBanner from "../../components/organizations";
import TestimonialsBanner from "../../components/testimonialsBanner";
import GetInTouchBanner from "../../components/getInTouch";
import Aspire from "../../components/aspire";
import Footer from "../../components/footer";

const Home: React.FC = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <ServiceBanner />
      <AboutBanner />
      <PeopleBanner />
      <OrganisationBanner />
      <TestimonialsBanner />
      <Box mt={5}>
        <GetInTouchBanner />
      </Box>
      <Box mt={"21px"}>
        <Aspire />
      </Box>
      <Box mt={"-25px"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
