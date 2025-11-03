import { Box, Typography } from "@mui/material";
import graph from "../../assets/img/graph.svg";
import PerformanceGrid from "./performanceGrid";

export default function PerformanceCard() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        padding: "16px",
        flexShrink: 0,
        borderRadius: "10px",
        border: "1px solid #DFDFDF",
        background: "#F8F8F8",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
        <img src={graph} />
        <Typography
          sx={{
            color: "#000",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          Key Performance Indicators
        </Typography>
      </Box>
      <PerformanceGrid />
    </Box>
  );
}
