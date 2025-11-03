import { Box } from "@mui/material";
import React from "react";

interface StatCardProps {
  title: string;
  count: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, count }) => {
  return (
    <Box
      position={"relative"}
      sx={{
        width: "184px",
        height: "111px",
        borderRadius: "15px",
        background: "linear-gradient(90deg, #FFD12B 2.27%, #D78E28 99.93%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        "&:hover": {
          background: "linear-gradient(90deg, #D78E28 2.27%, #FFD12B 99.93%)",
          ".sliding-box": {
            transform: "translateY(100%)",
          },
          ".bottom-section": {
            color: "#D78E28",
          },

          ".top-section": {
            color: "white",
          },
        },
      }}
    >
      {/* Sliding white box */}
      <Box
        className="sliding-box"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background: "white",
          transform: "translateY(0%)",
          transition: "transform 0.2s ease-in-out",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Top section - only text visible */}
        <Box
          className="top-section"
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "14px",
            color: "#e1a53a",
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </Box>

        {/* Bottom section */}
        <Box
          className="bottom-section"
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "22px",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
        >
          {count}
        </Box>
      </Box>
    </Box>
  );
};

export default StatCard;
