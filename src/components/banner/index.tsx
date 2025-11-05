import React from "react";
import banner from "../../assets/img/banner-img.jpg";
import { Box, Container, Typography } from "@mui/material";
import AspireChip from "../../atomic-elements/aspireChip";
import StatCard from "../../atomic-elements/statCard";
import FlowtingQuateBar from "../../atomic-elements/flowtingQuateBar";

import imgLayer from "../../assets/img/imgLayer.svg";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        "&:hover": {
          "& .img-layer": {
            opacity: 1,
            transition: "all 0.5s ease-in-out",
          },
        },
      }}
    >
      <Box width="100%" overflow={"hidden"}>
        <Container maxWidth={"xl"} sx={{ position: "relative" }}>
          {/* First Banner Image */}
          <Box
            component="img"
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              maxWidth: "100%",
              objectFit: { md: "contain", xs: "cover" },
              width: "100%",
              zIndex: -1,
              minHeight: "350px",
              maxHeight: "1300px",
              transform: "translateX(-50%)", // Center horizontally
              opacity: { md: 1, xs: 0.5 },
            }}
            src={banner}
          ></Box>

          {/* Second Banner Image - for medium screens */}
          <Box
            component="img"
            sx={{
              position: "absolute",
              top: { xs: "350px", md: "500px" },
              left: "50%",
              maxWidth: "100%",
              objectFit: { xs: "cover" },
              width: "100%",
              zIndex: -1,
              minHeight: { md: "450px", xs: "600px" },
              maxHeight: "830px",
              display: { xs: "block", lg: "none" },
              transform: "translateX(-50%)", // Center horizontally
            }}
            src={banner}
          ></Box>

          {/* Third Banner Image - for small screens */}
        </Container>
        <Box
          className="img-layer"
          sx={{
            position: "absolute",
            width: "100%",
            maxHeight: "950px",
            overflow: "hidden",
            zIndex: -1,
            top: 0,
            left: 0,
            opacity: 0,
          }}
        >
          <img
            src={imgLayer}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              minHeight: "400px",
            }}
          />
          <img
            src={imgLayer}
            style={{
              marginTop: "-10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              minHeight: "400px",
            }}
          />
        </Box>
        <Box
          width="100%"
          height="100%"
          // position={"absolute"}
          top={0}
          zIndex={2}
        >
          <Box mb={"60px"} pt={"60px"}>
            <center style={{ padding: "0px 10px" }}>
              <AspireChip />
            </center>
          </Box>
          <center>
            <Typography
              display={{ md: "block", xs: "none" }}
              variant="h3"
              color="white"
              sx={{
                maxWidth: "700px",
                textAlign: "center",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "75px",
                letterSpacing: "3px",
                background: "linear-gradient(90deg, #343030 0%, #21A6DF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Empowering People, Enabling Organizations
            </Typography>
            <Typography
              display={{ md: "none", xs: "block" }}
              variant="h3"
              color="white"
              sx={{
                color: "#2C496D",
                textAlign: "center",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "40px",
                letterSpacing: "1px",
              }}
            >
              Inspiring through Innovation
            </Typography>
          </center>

          <Box
            mt={{ lg: 14, xs: 8 }}
            paddingX={"10px"}
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            zIndex={10}
          >
            <FlowtingQuateBar>
              <Typography
                variant="h6"
                sx={{
                  color: "#125A79",
                  textAlign: "center",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "40px",
                  letterSpacing: "1px",
                  maxWidth: "100%",
                  flexShrink: 0,
                }}
              >
                Delivering smart, data-driven solutions that drive innovation
                and growth for our customers
              </Typography>
            </FlowtingQuateBar>
          </Box>

          <Box
            sx={{
              bottom: 0,
              display: { md: "flex", xs: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              width: "100%",
              background: "rgba(21, 52, 92, 0.75)",
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
              py: { sm: "100px", md: "150px", xs: "50px" },
              mt: "-60px",
            }}
          >
            <Box
              display={"flex"}
              gap={"34px"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              sx={{
                mt: { xs: 5, md: 0 },
              }}
            >
              <StatCard title="Projects" count="100 +" />
              <StatCard title="Clients" count="25 +" />
              <StatCard title="Employments" count="100 +" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
