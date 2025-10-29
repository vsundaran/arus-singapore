import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)({
  display: "flex",
  width: "183px",
  height: "49px",
  padding: "11.308px 55.987px 9.692px 59.013px",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  borderRadius: "37px 0px 0px 37px",
  background: "linear-gradient(90deg, #FFD12B 0%, #A25919 100%)",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",

  transition: "background 0.3s ease-in-out",

  // Label styles
  color: "#FFF",
  textAlign: "center",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "28px",
  letterSpacing: "0.2px",

  // Remove default chip styles
  "& .MuiChip-label": {
    padding: 0,
    overflow: "visible",
  },

  "&:hover": {
    background: "linear-gradient(90deg, #A25919 0%, #FFD12B 100%)",
  },
});

// Usage component
function SingaporeChip() {
  return <StyledChip label="Singapore" />;
}

export default SingaporeChip;
