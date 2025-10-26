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
  width: "113px",
  padding: "10px 30px",
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
    background: selected ? "#D78E28" : "rgba(255, 205, 23, 0.1)",
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
          color: selected ? "#FFF" : "#000",
          textAlign: "center",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "20px",
          letterSpacing: "0.2px",
        }}
      >
        {label}
      </Typography>
    </StyledButton>
  );
};

export default CategoryButton;
