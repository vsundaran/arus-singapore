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
    <Box position={"relative"}>
      <Box
        display="flex"
        zIndex={1000}
        position={"fixed"}
        right={10}
        bottom={"10%"}
        gap={"10px"}
      >
        <Box
          component={"button"}
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          sx={{
            paddingX: "11px",
            outline: "none",
            border: "none",
            paddingY: "11px",
            background: "rgba(255, 255, 255, 0.89)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "100%",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M26.9173 5.66666H7.08398C5.95681 5.66666 4.87581 6.11442 4.07878 6.91145C3.28175 7.70848 2.83398 8.78949 2.83398 9.91666V24.0833C2.83398 25.2105 3.28175 26.2915 4.07878 27.0885C4.87581 27.8856 5.95681 28.3333 7.08398 28.3333H26.9173C28.0445 28.3333 29.1255 27.8856 29.9225 27.0885C30.7196 26.2915 31.1673 25.2105 31.1673 24.0833V9.91666C31.1673 8.78949 30.7196 7.70848 29.9225 6.91145C29.1255 6.11442 28.0445 5.66666 26.9173 5.66666ZM26.9173 8.49999L17.709 14.8325C17.4936 14.9568 17.2493 15.0223 17.0007 15.0223C16.752 15.0223 16.5077 14.9568 16.2923 14.8325L7.08398 8.49999H26.9173Z"
              fill="url(#paint0_linear_2588_2808)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2588_2808"
                x1="17.0007"
                y1="5.66666"
                x2="17.0007"
                y2="28.3333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD12B" />
                <stop offset="1" stop-color="#D78E28" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
        <Box
          component={"button"}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          sx={{
            outline: "none",
            border: "none",
            paddingX: "13px",
            paddingY: "11px",
            background: "rgba(255, 255, 255, 0.89)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "100%",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M32.0818 16.7643L17.4568 0.514312C16.8409 -0.171437 15.6579 -0.171437 15.042 0.514312L0.417019 16.7643C0.206875 16.9979 0.0689394 17.2873 0.0199104 17.5976C-0.0291187 17.908 0.0128616 18.2259 0.140769 18.5128C0.400769 19.0994 0.982519 19.4764 1.62439 19.4764H4.87439V30.8514C4.87439 31.2824 5.0456 31.6957 5.35035 32.0005C5.65509 32.3052 6.06842 32.4764 6.49939 32.4764H11.3744C11.8054 32.4764 12.2187 32.3052 12.5234 32.0005C12.8282 31.6957 12.9994 31.2824 12.9994 30.8514V24.3514H19.4994V30.8514C19.4994 31.2824 19.6706 31.6957 19.9753 32.0005C20.2801 32.3052 20.6934 32.4764 21.1244 32.4764H25.9994C26.4304 32.4764 26.8437 32.3052 27.1484 32.0005C27.4532 31.6957 27.6244 31.2824 27.6244 30.8514V19.4764H30.8744C31.1891 19.4778 31.4974 19.3875 31.7617 19.2167C32.026 19.0458 32.2349 18.8018 32.3629 18.5143C32.4909 18.2268 32.5324 17.9082 32.4825 17.5975C32.4326 17.2868 32.2934 16.9973 32.0818 16.7643Z"
              fill="url(#paint0_linear_2588_424)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2588_424"
                x1="16.2515"
                y1="0"
                x2="16.2515"
                y2="32.4764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2162B8" />
                <stop offset="1" stop-color="#0F2C52" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
        {/* <img src={home} /> */}
        {/* <img src={message} /> */}
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
      <Box id="testimonials" mt={{ md: 8, xs: 4 }}>
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
