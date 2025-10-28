import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box, Grid, Typography } from "@mui/material";
import groupPhoto from "../../assets/img/groupPhoto.svg";
import PeopleCard from "./peopleCard";
import OrganisationCard from "./organizationCard";

const AboutBanner: React.FC = () => {
  // Common styles
  const commonTypographyStyles = {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "0.2px",
    color: "#000",
  };

  const boldBlueTextStyles = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    color: "#21A6DF",
    lineHeight: "28px",
    letterSpacing: "0.2px",
    whiteSpace: "nowrap" as const,
  };

  const gradientTextStyles = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "28px",
    letterSpacing: "0.2px",
    background: "linear-gradient(90deg, #21A6DF 69.23%, #125A79 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap" as const,
  };

  const quoteBoxStyles = {
    ...commonTypographyStyles,
    paddingX: "10px",
    background: "#FFFFFF",
    textAlign: "center",
    width: "fit-content",
    whiteSpace: "wrap",
    overflow: "visible",
  };

  return (
    <Box>
      <BannerDivider label="About" />

      <center>
        <Box mb={"34px"}>
          <GradientText labels={["Innovate", "Impact", "Inspire"]} />
        </Box>
      </center>

      <Box textAlign="center" mb={"64px"}>
        <img
          src={groupPhoto}
          style={{ width: "100%", maxWidth: "1237px" }}
          alt="Group photo"
        />
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            maxWidth: "100%",
            paddingX: "35px",
            paddingY: "60px",
            minHeight: "431px",
            flexShrink: 0,
            borderRadius: "25px",
            position: "relative",
            background: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              background: "linear-gradient(to right, #2162B8, #FFCD17)",
              borderRadius: "27px",
              zIndex: -1,
            },
          }}
        >
          {/* Quote Section */}
          <center>
            <Box mt={"-78px"} mb={"40px"}>
              <Typography component="div" sx={quoteBoxStyles}>
                <Box component="span" sx={boldBlueTextStyles}>
                  “Arus{" "}
                </Box>
                believes that every success story is built on the{" "}
                <Box component="span" sx={gradientTextStyles}>
                  strength of people and the power of organizations ”
                </Box>
              </Typography>
            </Box>
          </center>

          {/* Cards Section */}
          <Box mb={"45px"}>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid size={{ md: 6, xs: 12, sm: 6 }}>
                <PeopleCard />
              </Grid>
              <Grid size={{ md: 6, xs: 12, sm: 6 }}>
                <OrganisationCard />
              </Grid>
            </Grid>
          </Box>

          {/* Closing Statement */}
          <Typography component="div" sx={commonTypographyStyles}>
            <Box component="span" sx={boldBlueTextStyles}>
              Together,{" "}
            </Box>
            these connections form the foundation of our innovation. We don't
            just build solutions — we foster meaningful relationships that
            inspire progress, enable transformation, and deliver impact that
            lasts.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutBanner;
