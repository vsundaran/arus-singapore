import { Box } from "@mui/material";
import React from "react";

interface StatCardProps {
  title: string;
  count: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, count }) => {
  return (
    <Box
      sx={{
        width: "184px",
        height: "111px",
        borderRadius: "15px",
        background: "linear-gradient(90deg, #FFD12B 2.27%, #D78E28 99.93%)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
        "&:hover": {
          "& > .top-section": {
            background: "linear-gradient(90deg, #FFD12B 2.27%, #D78E28 99.93%)",
            color: "white",
          },
          "& > .bottom-section": {
            background: "white",
            color: "#D78E28",
          },
        },
        transition: "all 0.3s ease",
      }}
    >
      {/* Top section - becomes gradient on hover */}
      <Box
        className="top-section"
        sx={{
          background: "white",
          width: "100%",
          height: "50%",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#D78E28",
          fontWeight: 600,
          fontSize: "16px",
          transition: "all 0.3s ease",
        }}
      >
        {title}
      </Box>

      {/* Bottom section - becomes white on hover */}
      <Box
        className="bottom-section"
        sx={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "22px",
          width: "100%",
          transition: "all 0.3s ease",
        }}
      >
        {count}
      </Box>
    </Box>
  );
};

export default StatCard;
