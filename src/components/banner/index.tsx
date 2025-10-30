import React from "react";
import banner from "../../assets/img/banner-img.jpg";
import { Box, Typography } from "@mui/material";
import AspireChip from "../../atomic-elements/aspireChip";
import StatCard from "../../atomic-elements/statCard";
import FlowtingQuateBar from "../../atomic-elements/flowtingQuateBar";

import home from "../../assets/img/home.svg";
import message from "../../assets/img/message.svg";

import imgLayer from "../../assets/img/imgLayer.svg";

const Banner: React.FC = () => {
  return (
    <Box>
      <Box
        width="100%"
        position="relative"
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "1000px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: 0,
            top: 0,
            left: 0,
            opacity: 0,
            "&:hover": { opacity: 1, transition: "all 0.5s ease" },
          }}
        >
          <img
            src={imgLayer}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
          <img
            src={imgLayer}
            style={{
              marginTop: "-10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box width="100%" height="100%">
          <Box mb={"60px"} pt={"60px"}>
            <center>
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
            display={"flex"}
            justifyContent={"center"}
            position={"absolute"}
            bottom={"30%"}
            left={"50%"}
            width={"100%"}
            zIndex={1}
            sx={{
              transform: { md: "translateX(-50%)", xs: "translateX(-50%)" },
            }}
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
              display: { md: "flex", xs: "none" },
              // minHeight: "600px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              width: "100%",
              height: "350px",
              position: "absolute",
              background: "rgba(21, 52, 92, 0.75)",
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
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

            <Box display={"flex"} position={"absolute"} right={10} bottom={110}>
              <img src={home} />
              <img src={message} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          // bottom: 0,
          mt: "-400px",
          display: { md: "none", xs: "flex" },
          minHeight: "600px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          width: "100%",
          background: "rgba(21, 52, 92, 0.75)",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          position: "relative",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            background: "rgba(21, 52, 92, 0.75)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        ></Box>
        <Box
          display={"flex"}
          gap={"34px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          sx={{
            mt: { xs: 5, md: 0 },
            zIndex: 1,
          }}
        >
          <StatCard title="Projects" count="100 +" />
          <StatCard title="Clients" count="25 +" />
          <StatCard title="Employments" count="100 +" />
        </Box>

        <Box display={"flex"} position={"absolute"} right={10} bottom={110}>
          <img src={home} />
          <img src={message} />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
