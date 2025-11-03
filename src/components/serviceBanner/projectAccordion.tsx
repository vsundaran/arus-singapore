import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import graph from "../../assets/img/graph.svg";
import PerformanceGrid from "./performanceGrid";

export default function ProjectAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
            <img src={graph} />
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
        </AccordionSummary>
        <AccordionDetails>
          <PerformanceGrid />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
