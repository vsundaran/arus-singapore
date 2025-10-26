import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box, Typography } from "@mui/material";
import ServiceCard from "../../atomic-elements/card";
import coder from "../../assets/img/coder.jpg";
import db from "../../assets/img/db.svg";
import web from "../../assets/img/web.svg";
import laptop from "../../assets/img/laptop.jpg";
import TabPaper from "./tab";
import ServiceTabElement from "./tabElements";

const ServiceBanner: React.FC = () => {
  return (
    <Box>
      <BannerDivider label="Services" />
      <center>
        <Box mb={"44px"}>
          <GradientText labels={["Define", "Develop", "Deliver"]} />
        </Box>
      </center>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        mb={"53px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          maxWidth={"1100px"}
          gap={"39px"}
          justifyContent={"center"}
        >
          <ServiceCard>
            <img src={coder} style={{ width: "50%" }} />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "-30%",
                right: "-5%",
                width: "114px",
                height: "127px",
                borderRadius: "100%",
                background: "#E0F0F7",
              }}
            >
              <Box mt={5}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="11"
                  viewBox="0 0 24 11"
                  fill="none"
                >
                  <path
                    d="M12 10.2143C11.9016 10.2155 11.8041 10.1952 11.7137 10.1546C11.6233 10.114 11.542 10.0541 11.475 9.97857L4.725 2.90714C4.425 2.59286 4.425 2.10571 4.725 1.79143C5.025 1.47714 5.49 1.47714 5.79 1.79143L12.015 8.31286L18.225 1.80714C18.525 1.49286 18.99 1.49286 19.29 1.80714C19.59 2.12143 19.59 2.60857 19.29 2.92286L12.54 9.99428C12.39 10.1514 12.195 10.23 12.015 10.23L12 10.2143Z"
                    fill="#325A7D"
                  />
                </svg>
              </Box>
            </Box>
            <Box width={"100%"}>
              <img src={db} />
              <Typography
                fontWeight={600}
                mb={"8x"}
                mt={"0px"}
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  // lineHeight: "20px",
                  letterSpacing: "0.2px",
                  background:
                    "linear-gradient(90deg, #21A6DF 0%, #125A79 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Data Engineering & Analytics
              </Typography>
              <Typography
                sx={{
                  width: "260px",
                  color: "#000000",
                  fontFamily: "General Sans Variable",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.2px",
                  mb: "16px",
                }}
              >
                End-to-end data pipeline solutions for modern businesses
              </Typography>
            </Box>
          </ServiceCard>
          <ServiceCard>
            <img src={laptop} style={{ width: "50%" }} />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "-30%",
                right: "-5%",
                width: "114px",
                height: "127px",
                borderRadius: "100%",
                background: "#E7FFF1",
              }}
            >
              <Box mt={5}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="11"
                  viewBox="0 0 24 11"
                  fill="none"
                >
                  <path
                    d="M12 10.2143C11.9016 10.2155 11.8041 10.1952 11.7137 10.1546C11.6233 10.114 11.542 10.0541 11.475 9.97857L4.725 2.90714C4.425 2.59286 4.425 2.10571 4.725 1.79143C5.025 1.47714 5.49 1.47714 5.79 1.79143L12.015 8.31286L18.225 1.80714C18.525 1.49286 18.99 1.49286 19.29 1.80714C19.59 2.12143 19.59 2.60857 19.29 2.92286L12.54 9.99428C12.39 10.1514 12.195 10.23 12.015 10.23L12 10.2143Z"
                    fill="#325A7D"
                  />
                </svg>
              </Box>
            </Box>
            <Box width={"100%"}>
              <img src={web} />
              <Typography
                fontWeight={600}
                mb={"8x"}
                mt={"0px"}
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  // lineHeight: "20px",
                  letterSpacing: "0.2px",
                  background:
                    "linear-gradient(90deg, #21A6DF 0%, #125A79 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Application Development
              </Typography>
              <Typography
                sx={{
                  width: "260px",
                  color: "#000000",
                  fontFamily: "General Sans Variable",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "20px",
                  letterSpacing: "0.2px",
                  mb: "16px",
                }}
              >
                Modern web applications with cutting-edge technologies
              </Typography>
            </Box>
          </ServiceCard>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <TabPaper>
          <ServiceTabElement />
        </TabPaper>
      </Box>
    </Box>
  );
};

export default ServiceBanner;
