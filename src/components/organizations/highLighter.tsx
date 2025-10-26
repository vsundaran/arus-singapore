import { Box, Typography } from "@mui/material";

export default function Highlighter() {
  return (
    <Box
      sx={{
        width: "100%",
        flexShrink: 0,
        borderRadius: "15px",
        paddingY: "40px",
        paddingX: "120px",
        display: "flex",
        justifyContent: "space-between",
        background: "linear-gradient(182deg, #FFCD17 18.86%, #D78E28 98.73%)",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
      }}
    >
      <Box>
        <Box
          sx={{
            mb: "14px",
            display: "flex",
            width: "86px",
            height: "86px",
            padding: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "50px",
            background: "#FFF",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              background: "linear-gradient(180deg, #D78E28 0%, #FFCD17 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            25
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          Trusted Clients
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            mb: "14px",
            display: "flex",
            width: "86px",
            height: "86px",
            padding: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "50px",
            background: "#FFF",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              background: "linear-gradient(180deg, #D78E28 0%, #FFCD17 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            20
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          Technology Suppliers
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            mb: "14px",
            display: "flex",
            width: "86px",
            height: "86px",
            padding: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            borderRadius: "50px",
            background: "#FFF",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              background: "linear-gradient(180deg, #D78E28 0%, #FFCD17 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            12
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
