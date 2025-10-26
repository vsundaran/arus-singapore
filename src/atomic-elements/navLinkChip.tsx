import React from "react";
import { Chip, type ChipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component to match your design requirements
const StyledChip = styled(Chip)({
  display: "flex",
  minWidth: "132px",
  height: "36px",
  padding: "10px",
  alignItems: "center",
  justifyContent: "start",
  gap: "5px",
  borderRadius: "50px",
  border: "1px solid #FFF",
  "& .MuiChip-label": {
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "0.1px",
    padding: "0 8px 0 4px", // Adjust padding to maintain spacing
  },
  "& .MuiChip-icon": {
    // marginLeft: "4px",
    marginRight: "0",
    fontSize: "16px", // Adjust icon size if needed
  },
});

export interface CustomChipProps {
  /**
   * The label text to display
   */
  label: string;
  /**
   * The icon element to display on the left side
   */
  icon?: React.ReactElement;
  /**
   * Additional MUI Chip props
   */
  chipProps?: Omit<ChipProps, "icon" | "label" | "sx">;
}

// Component with dynamic label and icon
const NavLinkChip = ({ label, icon, ...props }: CustomChipProps) => {
  return <StyledChip icon={icon} label={label} variant="outlined" {...props} />;
};

export default NavLinkChip;
