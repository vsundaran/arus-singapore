import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import StyledPagination from "../../atomic-elements/pagenation";
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
      {value === index && (
        <Box sx={{ py: 3, px: { lg: 3, xs: 0 } }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Common tab styles
const tabStyles = {
  width: "33.333%",
  height: "30px",
  maxWidth: "100%",
  flexShrink: 0,
  borderRadius: "25px",
  minHeight: "30px",
  marginY: "2px",
  textTransform: "none" as const,
  color: "#D78E28 !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.2px",
};

// Tab configuration
const tabs = [
  { label: "Clients", index: 0 },
  { label: "Suppliers", index: 1 },
  { label: "Partners", index: 2 },
];

export default function OrganizationTabElement() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getTabStyles = (tabIndex: number) => ({
    ...tabStyles,
    background: value === tabIndex ? "#FFF" : "#DEF5FF",
    "&:hover": {
      background: value === tabIndex ? "#FFF" : "#E8F7FF",
    },
  });

  return (
    <Box
      mt={"34px !important"}
      my={{ md: "43px" }}
      mx={{ md: "50px", xs: "0px" }}
      overflow={"hidden"}
    >
      <Box
        className="organization-tabs"
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
          aria-label="organization tabs"
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.index}
              label={tab.label}
              {...a11yProps(tab.index)}
              sx={getTabStyles(tab.index)}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab) => (
        <CustomTabPanel key={tab.index} value={value} index={tab.index}>
          <Clients />
          {tab.index === 2 && (
            <Box mt={4}>
              <StyledPagination />
            </Box>
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
