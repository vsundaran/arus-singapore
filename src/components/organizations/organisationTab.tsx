import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import StyledPagination from "../../atomic-elements/pagenation";
import { Grid } from "@mui/material";
import Clients from "./clients";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OrgasationTabElement() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box my={"43px"} mx={"50px"} overflow={"hidden"}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          height: "36px",
          flexShrink: 0,
          borderRadius: "25px",
          background: "#DEF5FF",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            "& .MuiTabs-indicator": {
              display: "none", // Hide the default indicator
            },
          }}
        >
          <Tab
            label="Clients "
            {...a11yProps(0)}
            sx={{
              width: "32.755%",
              height: "30px",
              maxWidth: "400px",
              flexShrink: 0,
              borderRadius: "25px",
              background: value === 0 ? "#FFF" : "#DEF5FF",
              minHeight: "30px",
              margin: "3px",
              textTransform: "none",
              color: "#D78E28 !important",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              "&:hover": {
                background: value === 0 ? "#FFF" : "#E8F7FF",
              },
            }}
          />
          <Tab
            label="Suppliers"
            {...a11yProps(1)}
            sx={{
              width: "32.755%",
              height: "30px",
              maxWidth: "400px",
              flexShrink: 0,
              borderRadius: "25px",
              background: value === 1 ? "#FFF" : "#DEF5FF",
              minHeight: "30px",
              margin: "3px",
              textTransform: "none",
              color: "#D78E28 !important",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              "&:hover": {
                background: value === 1 ? "#FFF" : "#E8F7FF",
              },
            }}
          />
          <Tab
            label="Partners"
            {...a11yProps(2)}
            sx={{
              width: "32.755%",
              height: "30px",
              maxWidth: "400px",
              flexShrink: 0,
              borderRadius: "25px",
              background: value === 2 ? "#FFF" : "#DEF5FF",
              minHeight: "30px",
              margin: "3px",
              textTransform: "none",
              color: "#D78E28 !important",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              "&:hover": {
                background: value === 2 ? "#FFF" : "#E8F7FF",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Clients />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Clients />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Clients />
        <Box mt={4}>
          <StyledPagination />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
