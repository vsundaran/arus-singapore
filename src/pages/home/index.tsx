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

import home from "../../assets/img/home.svg";
import message from "../../assets/img/message.svg";

const Home: React.FC = () => {
  return (
    <Box position={"relative"}>
      <Box
        display="flex"
        zIndex={1000}
        position={"fixed"}
        right={10}
        bottom={"10%"}
      >
        <img src={home} />
        <img src={message} />
      </Box>
      <Header />
      <Box id="banner">
        <Banner />
      </Box>
      <Box id="services">
        <ServiceBanner />
      </Box>
      <Box id="about">
        <AboutBanner />
      </Box>
      <Box id="people">
        <PeopleBanner />
      </Box>
      <Box id="organisations">
        <OrganisationBanner />
      </Box>

      <Box id="testimonials">
        <TestimonialsBanner />
      </Box>
      <Box mt={5} id="get-in-touch">
        <GetInTouchBanner />
      </Box>
      <Box mt={"21px"} id="aspire">
        <Aspire />
      </Box>
      <Box mt={"-25px"} id="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
