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
  cursor: "pointer",

  "& .MuiChip-label": {
    color: "#FFF", // Default color
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "0.1px",
    padding: "0 8px 0 4px",
    transition: "all 0.3s ease", // Smooth transition
  },

  "& .MuiChip-icon": {
    marginRight: "0",
    fontSize: "16px",
    color: "#FFF", // Default icon color
    transition: "all 0.3s ease", // Smooth transition
  },

  "&:hover": {
    "& .MuiChip-label": {
      background: "linear-gradient(90deg, #A25919, #FFD12B)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    },
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
  deleteIcon?: React.ReactElement | undefined;
  /**
   * Additional MUI Chip props
   */
  chipProps?: Omit<ChipProps, "icon" | "label" | "sx">;

  onClick?: () => void;
}

// Component with dynamic label and icon
const NavLinkChip = ({
  label,
  icon,
  onClick = () => {},
  deleteIcon = undefined,
  ...props
}: CustomChipProps) => {
  return (
    <StyledChip
      deleteIcon={deleteIcon}
      onDelete={deleteIcon ? onClick : undefined}
      onClick={onClick}
      className="headerChip"
      icon={icon}
      label={label}
      variant="outlined"
      {...props}
    />
  );
};

export default NavLinkChip;
