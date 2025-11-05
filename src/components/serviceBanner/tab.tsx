import React from "react";
import { Paper, type PaperProps } from "@mui/material";

interface TabPaperProps extends PaperProps {
  children?: React.ReactNode;
}

const TabPaper: React.FC<TabPaperProps> = ({ children, sx, ...props }) => {
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        // minHeight: "830px",
        width: "100%",
        flexShrink: 0,
        borderRadius: "25px",
        border: "1px solid #DAE4E4",
        background: "#FFF",
        boxShadow: "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default TabPaper;
