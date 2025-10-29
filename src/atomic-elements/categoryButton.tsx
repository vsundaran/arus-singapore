// File: CategoryButton.tsx
import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CategoryButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  display: "flex",
  maxWidth: "113px",
  minWidth: "fit-content",
  width: "100%",
  paddingY: "10px",
  paddingX: { md: "30px", xs: "10px" },
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "15px",
  border: "1px solid #FFCD17",
  background: selected ? "#D78E28" : "transparent",
  color: selected ? "#fff" : "#000",
  textTransform: "none",
  boxShadow: "none",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "white",
    background: "#D78E28",
    boxShadow: "none",
  },
}));

const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "20px",
          letterSpacing: "0.2px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "&:hover": {
            color: "white",
          },
        }}
      >
        {label}
      </Typography>
    </StyledButton>
  );
};

export default CategoryButton;
