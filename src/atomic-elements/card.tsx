import { Box } from "@mui/material";
import React from "react";

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
  sx?: object;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  className = "",
  sx = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const ServiceCardStyle: any = {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    gap: "12px",
    position: "relative",
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
    <Box
      sx={ServiceCardStyle}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Box>
  );
};

export default ServiceCard;
