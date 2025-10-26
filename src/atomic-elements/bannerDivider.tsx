import { Box, Typography } from "@mui/material";

const BannerDivider = ({ label = "" }: { label: string }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"10px"} my={2}>
      <div
        style={{ height: "2px", width: "100%", background: "#183857" }}
      ></div>
      <Typography
        style={{
          color: "#183857",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "57px",
          letterSpacing: "0.2px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
      <div
        style={{ height: "2px", width: "100%", background: "#D78E28" }}
      ></div>
    </Box>
  );
};

export default BannerDivider;
