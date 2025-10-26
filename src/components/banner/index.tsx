import React from "react";
import banner from "../../assets/img/banner-img.jpg";
import { Box, Typography } from "@mui/material";
import AspireChip from "../../atomic-elements/aspireChip";
import StatCard from "../../atomic-elements/StatCard";
import FlowtingQuateBar from "../../atomic-elements/flowtingQuateBar";

import home from "../../assets/img/home.svg";
import message from "../../assets/img/message.svg";

const Banner: React.FC = () => {
  return (
    <Box width="100%" position={"relative"}>
      <img src={banner} style={{ width: "100%" }} />
      <Box position={"absolute"} top={0} left={0} width="100%" height="100%">
        <Box my={"60px"}>
          <center>
            <AspireChip />
          </center>
        </Box>
        <center>
          <Typography
            variant="h3"
            color="white"
            sx={{
              maxWidth: "700px",
              textAlign: "center",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 100,
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
        </center>

        <Box
          position="absolute"
          //   top="50%"
          left="50%"
          bottom={"25%"}
          zIndex={1}
          sx={{ transform: "translate(-50%, -50%)" }}
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
                lineHeight: "40px" /* 200% */,
                letterSpacing: "1px",
                maxWidth: "1095px",
                flexShrink: 0,
              }}
            >
              Delivering smart, data-driven solutions that drive innovation and
              growth for our customers
            </Typography>
          </FlowtingQuateBar>
        </Box>

        <Box
          sx={{
            bottom: 0,
            display: "flex",
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
          <Box display={"flex"} gap={"34px"}>
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
  );
};

export default Banner;
