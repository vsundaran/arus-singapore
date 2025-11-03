import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box, Container } from "@mui/material";
import OrgasationTabElement from "./organisationTab";

const OrganisationBanner: React.FC = () => {
  // Common styles

  return (
    <Box>
      <BannerDivider label="Organizations" />

      <center>
        <Box mb={1}>
          <GradientText labels={["Plan", "Perform", "Progress"]} />
        </Box>
      </center>
      <Container maxWidth="xl">
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            sx={{
              paddingTop: "42px",
              paddingX: { xs: "10px" },
              maxWidth: "100%",
              overflow: "hidden",
              width: "100%",
              minHeight: "712px",
              flexShrink: 0,
              borderRadius: "50px",
              background: "#FFF",
              "@media (min-width: 955px)": {
                boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.25)",
              },
            }}
          >
            <OrgasationTabElement />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OrganisationBanner;
