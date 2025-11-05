import { Box } from "@mui/material";
import React from "react";

interface FlowtingQuateBarProps {
  children?: React.ReactNode;
  className?: string;
}

const FlowtingQuateBar: React.FC<FlowtingQuateBarProps> = ({
  children,
  className = "",
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    maxWidth: "1214px",
    width: "100%",
    minHeight: "117px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.95)",
    backgroundColor: "#FFFFFFF2",
    borderColor: "#FFFFFF1A",
  };

  return (
    <Box
      sx={{
        padding: "10px",
        background: "#445b7a4a",
        borderRadius: "10px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
    >
      <div style={containerStyle} className={className}>
        {children}
      </div>
    </Box>
  );
};

export default FlowtingQuateBar;
