import { Box, Typography } from "@mui/material";
import organisation from "../../assets/img/organisation.svg";

export default function OrganisationCard() {
  // Common styles
  const commonTextStyles = {
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "28px",
    letterSpacing: "0.2px",
  };

  const whiteBoldTextStyles = {
    ...commonTextStyles,
    color: "#FFF",
    fontWeight: 700,
  };

  const blackRegularTextStyles = {
    ...commonTextStyles,
    color: "#000",
    fontWeight: 400,
  };

  const blackBoldTextStyles = {
    ...commonTextStyles,
    color: "#000",
    fontWeight: 700,
  };

  const headerStyles = {
    ...whiteBoldTextStyles,
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
        background: "linear-gradient(130deg, #E7A543 18.41%, #FFD12B 72.93%)",
      }}
    >
      {/* Header Section */}
      <Box
        display={"flex"}
        gap={"18px"}
        alignItems={"center"}
        sx={headerStyles}
      >
        <img src={organisation} alt="Organization icon" />
        <Typography sx={whiteBoldTextStyles}>Organization</Typography>
      </Box>

      {/* Content Section */}
      <Typography sx={blackRegularTextStyles}>
        Beyond our walls, we are empowered by the trust of our{" "}
        <Box component="span" sx={blackBoldTextStyles}>
          Clients
        </Box>{" "}
        the reliability of our{" "}
        <Box component="span" sx={blackBoldTextStyles}>
          Suppliers
        </Box>{" "}
        and the shared goals of our{" "}
        <Box component="span" sx={blackBoldTextStyles}>
          Partners.
        </Box>{" "}
      </Typography>
    </Box>
  );
}
