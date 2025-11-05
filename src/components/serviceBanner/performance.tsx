// import { Box, Typography } from "@mui/material";
// import graph from "../../assets/img/graph.svg";
// import PerformanceGrid from "./performanceGrid";

// export default function PerformanceCard() {
//   return (
//     <Box
//       sx={{
//         maxWidth: "100%",
//         height: "100%",
//         padding: "16px",
//         flexShrink: 0,
//         borderRadius: "10px",
//         border: "1px solid #DFDFDF",
//         background: "#F8F8F8",
//       }}
//     >
//       <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
//         <img src={graph} />
//         <Typography
//           sx={{
//             color: "#000",
//             fontSize: "12px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "20px",
//             letterSpacing: "0.2px",
//           }}
//         >
//           Key Performance Indicators
//         </Typography>
//       </Box>
//       <PerformanceGrid />
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import graph from "../../assets/img/graph.svg";
import PerformanceGrid from "./performanceGrid";

export default function PerformanceCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Custom expand icon component
  const CustomExpandIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const performanceContent = <PerformanceGrid />;

  const performanceHeader = (
    <Box display={"flex"} alignItems={"center"} gap={"8px"}>
      <img src={graph} alt="Performance graph icon" />
      <Typography
        sx={{
          color: "#000",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "20px",
          letterSpacing: "0.2px",
        }}
      >
        Key Performance Indicators
      </Typography>
    </Box>
  );

  // Mobile view with accordion
  if (isMobile) {
    return (
      <Accordion
        sx={{
          maxWidth: "100%",
          borderRadius: "10px !important",
          border: "1px solid #DFDFDF",
          background: "#F8F8F8",
          boxShadow: "none",
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          sx={{
            minHeight: "auto !important",
            padding: "16px",
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(0deg)",
            },
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(180deg)",
            },
          }}
        >
          {performanceHeader}
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0 16px 16px 16px" }}>
          {performanceContent}
        </AccordionDetails>
      </Accordion>
    );
  }

  // Desktop view (original layout)
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        padding: "16px",
        flexShrink: 0,
        borderRadius: "10px",
        border: "1px solid #DFDFDF",
        background: "#F8F8F8",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
        {performanceHeader}
      </Box>
      {performanceContent}
    </Box>
  );
}
