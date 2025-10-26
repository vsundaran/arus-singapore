import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import GradientText from "../../atomic-elements/gradientText";
import { Box } from "@mui/material";
import PeopleTabElement from "./tabElements";

const PeopleBanner: React.FC = () => {
  // Common styles

  return (
    <Box>
      <BannerDivider label="People" />

      <center>
        <Box mb={"34px"}>
          <GradientText labels={["Engage", "Enable", "Excel"]} />
        </Box>
      </center>

      <PeopleTabElement />
    </Box>
  );
};

export default PeopleBanner;
