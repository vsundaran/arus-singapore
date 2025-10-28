import { Box, Typography } from "@mui/material";
import people from "../../assets/img/people.svg";

export default function PeopleCard() {
  // Common styles
  const commonTextStyles = {
    color: "#FFF",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "28px",
    letterSpacing: "0.2px",
  };

  const regularTextStyles = {
    ...commonTextStyles,
    fontWeight: 400,
  };

  const boldTextStyles = {
    ...commonTextStyles,
    fontWeight: 700,
  };

  const headerStyles = {
    ...boldTextStyles,
    mb: "20px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "228px",
        paddingY: "22px",
        paddingX: "32px",
        flexShrink: 0,
        borderRadius: "25px",
        background: "linear-gradient(130deg, #16345D 18.41%, #4A6C99 72.93%)",
      }}
    >
      {/* Header Section */}
      <Box
        display={"flex"}
        gap={"18px"}
        alignItems={"center"}
        sx={headerStyles}
      >
        <img src={people} alt="People icon" />
        <Typography sx={boldTextStyles}>People</Typography>
      </Box>

      {/* Content Section */}
      <Typography sx={regularTextStyles}>
        Within our walls, our{" "}
        <Box component="span" sx={boldTextStyles}>
          Leaders
        </Box>{" "}
        set the vision, our{" "}
        <Box component="span" sx={boldTextStyles}>
          Advisers
        </Box>{" "}
        provide wisdom, and our{" "}
        <Box component="span" sx={boldTextStyles}>
          Innovators
        </Box>{" "}
        bring ideas to life through technology and creativity.
      </Typography>
    </Box>
  );
}
