import { Box } from "@mui/material";
import React from "react";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
  sx?: object;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  className = "",
  sx = {},
}) => {
  const ServiceCardStyle: any = {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    gap: "12px",
    position: "relative",
    margin: "auto",
    width: "100%",
    maxWidth: "614px",
    overflow: "hidden",
    borderRadius: "20px",
    border: "1px solid rgba(177, 187, 188, 0.50)",
    background: "#FFF",
    marginBottom: { xs: "15px", md: "0px" },
    ...sx,
  };

  return (
    <Box sx={ServiceCardStyle} className={className}>
      {children}
    </Box>
  );
};

export default ServiceCard;
