import { Box, Typography } from "@mui/material";

export default function Aspire() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "184px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexShrink: 0,
        background: "linear-gradient(90deg, #D8E3FF 0%, #E5CDDC 100%)",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Inter !important",
          fontSize: { xs: "32px", md: "64px" },
          fontStyle: "normal",
          fontWeight: { xs: "800", md: "300" },
          letterSpacing: "0.2px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        ASPIRE TO INSPIRE
      </Typography>
    </Box>
  );
}
