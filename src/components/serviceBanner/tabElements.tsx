// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import ServiceProject from "./projects";
// import TechStack from "./techStack";
// import Service from "./services";
// import StyledPagination from "../../atomic-elements/pagenation";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function ServiceTabElement() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (_: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box my={"43px"} mx={{ md: "50px", xs: "10px" }}>
//       <Box
//         sx={{
//           borderBottom: 1,
//           borderColor: "divider",
//           width: "100%",
//           height: "36px",
//           flexShrink: 0,
//           borderRadius: "25px",
//           background: "#DEF5FF",
//           boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25) inset",
//         }}
//       >
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           sx={{
//             width: "100%",
//             height: "100%",
//             "& .MuiTabs-indicator": {
//               display: "none", // Hide the default indicator
//             },
//           }}
//         >
//           <Tab
//             label="Projects"
//             {...a11yProps(0)}
//             sx={{
//               width: "32.33%",
//               height: "30px",
//               maxWidth: "400px",
//               flexShrink: 0,
//               borderRadius: "25px",
//               background: value === 0 ? "#FFF" : "#DEF5FF",
//               minHeight: "30px",
//               margin: "3px",
//               textTransform: "none",
//               color: "#D78E28 !important",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "20px",
//               letterSpacing: "0.2px",
//               "&:hover": {
//                 background: value === 0 ? "#FFF" : "#E8F7FF",
//               },
//             }}
//           />
//           <Tab
//             label="Tech Stack"
//             {...a11yProps(1)}
//             sx={{
//               width: "32.33%",
//               height: "30px",
//               maxWidth: "400px",
//               flexShrink: 0,
//               borderRadius: "25px",
//               background: value === 1 ? "#FFF" : "#DEF5FF",
//               minHeight: "30px",
//               margin: "3px",
//               textTransform: "none",
//               color: "#D78E28 !important",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "20px",
//               letterSpacing: "0.2px",
//               "&:hover": {
//                 background: value === 1 ? "#FFF" : "#E8F7FF",
//               },
//             }}
//           />
//           <Tab
//             label="Services"
//             {...a11yProps(2)}
//             sx={{
//               width: "32.33%",
//               height: "30px",
//               maxWidth: "400px",
//               flexShrink: 0,
//               borderRadius: "25px",
//               background: value === 2 ? "#FFF" : "#DEF5FF",
//               minHeight: "30px",
//               margin: "3px",
//               textTransform: "none",
//               color: "#D78E28 !important",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "20px",
//               letterSpacing: "0.2px",
//               "&:hover": {
//                 background: value === 2 ? "#FFF" : "#E8F7FF",
//               },
//             }}
//           />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         <ServiceProject />
//         <Box sx={{ mt: "50px" }}>
//           <StyledPagination />
//         </Box>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <TechStack />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <Service />
//       </CustomTabPanel>
//     </Box>
//   );
// }

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ServiceProject from "./projects";
import TechStack from "./techStack";
import Service from "./services";
import StyledPagination from "../../atomic-elements/pagenation";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab configuration interface
interface TabConfig {
  label: string;
  component: React.ReactNode;
  showPagination?: boolean;
}

const TAB_CONFIGS: TabConfig[] = [
  {
    label: "Projects",
    component: <ServiceProject />,
    showPagination: true,
  },
  {
    label: "Tech Stack",
    component: <TechStack />,
    showPagination: false,
  },
  {
    label: "Services",
    component: <Service />,
    showPagination: false,
  },
];

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
        <Box sx={{ p: 3, px: { md: 3, xs: 0 } }}>{children}</Box>
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
  width: "33.33%",
  height: "30px",
  maxWidth: "100%",
  flexShrink: 0,
  borderRadius: "25px",
  minHeight: "30px",
  margin: "3px",
  textTransform: "none" as const,
  color: "#D78E28 !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.2px",
};

export default function ServiceTabElement() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box my={"43px"} mx={{ md: "50px", xs: "10px" }}>
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
            width: "100%",
            height: "100%",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {TAB_CONFIGS.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                ...tabStyles,
                background: value === index ? "#FFF" : "#DEF5FF",
                "&:hover": {
                  background: value === index ? "#FFF" : "#E8F7FF",
                },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ))}
        </Tabs>
      </Box>

      {TAB_CONFIGS.map((tab, index) => (
        <CustomTabPanel key={tab.label} value={value} index={index}>
          {tab.component}
          {tab.showPagination && (
            <Box sx={{ mt: "50px", width: "100%" }}>
              <StyledPagination />
            </Box>
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
