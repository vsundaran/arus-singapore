import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import StyledPagination from "../../atomic-elements/pagenation";
import { Grid } from "@mui/material";
import LeaderCard from "./leaderCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Constants for tab configuration
const TAB_CONFIGS = [
  { label: "Leaders", key: "leaders" },
  { label: "Advisers", key: "advisers" },
  { label: "Innovators", key: "innovators" },
] as const;

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
        <Box sx={{ my: 3, p: { md: 3, xs: 0 } }}>{children}</Box>
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
  marginY: "3px",
  textTransform: "none" as const,
  color: "#D78E28 !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.2px",
};

// Common container styles
const containerStyles = {
  borderBottom: 1,
  borderColor: "divider",
  width: "100%",
  height: "36px",
  flexShrink: 0,
  borderRadius: "25px",
  background: "#DEF5FF",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
};

// Common tabs styles
const tabsStyles = {
  width: "100%",
  height: "100%",
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

// Reusable tab content component
const TabContent: React.FC<{ showPagination?: boolean }> = ({
  showPagination = false,
}) => (
  <>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 6, xl: 3 }}>
          <LeaderCard />
        </Grid>
      ))}
    </Grid>
    {showPagination && (
      <Box mt={4}>
        <StyledPagination />
      </Box>
    )}
  </>
);

export default function PeopleTabElement() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box my={"43px"}>
      <Box sx={containerStyles}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="people tabs"
          sx={tabsStyles}
        >
          {TAB_CONFIGS.map((tab, index) => (
            <Tab
              key={tab.key}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                ...tabStyles,
                background: value === index ? "#FFF" : "#DEF5FF",
                "&:hover": {
                  background: value === index ? "#FFF" : "#E8F7FF",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {TAB_CONFIGS.map((_, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <TabContent showPagination={index === 2} />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
