import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Service data structure
const services = [
  {
    title: "Data Pipeline Development",
    description:
      "Build robust, scalable data pipelines that handle petabytes of data",
    features: [
      "Real-time streaming",
      "Batch processing",
      "Data validation",
      "Monitoring & alerting",
    ],
  },
  {
    title: "Data Pipeline Development",
    description:
      "Build robust, scalable data pipelines that handle petabytes of data",
    features: [
      "Real-time streaming",
      "Batch processing",
      "Data validation",
      "Monitoring & alerting",
    ],
  },
  {
    title: "Data Pipeline Development",
    description:
      "Build robust, scalable data pipelines that handle petabytes of data",
    features: [
      "Real-time streaming",
      "Batch processing",
      "Data validation",
      "Monitoring & alerting",
    ],
  },
  {
    title: "Data Pipeline Development",
    description:
      "Build robust, scalable data pipelines that handle petabytes of data",
    features: [
      "Real-time streaming",
      "Batch processing",
      "Data validation",
      "Monitoring & alerting",
    ],
  },
];

// Reusable CheckIcon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.252 0.0658387C7.32753 0.0226935 7.41301 0 7.5 0C7.58699 0 7.67247 0.0226935 7.748 0.0658387L14.748 4.06584C14.8245 4.10955 14.8881 4.17272 14.9324 4.24893C14.9766 4.32515 15 4.41171 15 4.49984V5.21984C15 7.42581 14.2814 9.57174 12.9528 11.3328C11.6243 13.0938 9.75818 14.3741 7.637 14.9798C7.54745 15.0054 7.45255 15.0054 7.363 14.9798C5.24182 14.3741 3.37571 13.0938 2.04717 11.3328C0.718624 9.57174 -2.74894e-05 7.42581 7.88645e-10 5.21984L7.88644e-10 4.49984C2.84278e-05 4.41171 0.0233513 4.32515 0.0676055 4.24893C0.11186 4.17272 0.175473 4.10955 0.252 4.06584L7.252 0.0658387ZM7.072 10.7108L11.39 5.31184L10.61 4.68784L6.928 9.28884L4.32 7.11584L3.68 7.88384L7.072 10.7108Z"
      fill="#00C951"
    />
  </svg>
);

// Reusable FeatureItem component
const FeatureItem = ({
  text,
  isFirst = false,
}: {
  text: string;
  isFirst?: boolean;
}) => (
  <Box
    display="flex"
    gap="18px"
    mb="10px"
    alignItems="center"
    mt={isFirst ? "14px" : 0}
  >
    <CheckIcon />
    <Typography sx={featureTextStyle}>{text}</Typography>
  </Box>
);

// Shared styles
const titleStyle = {
  mb: { md: "16px", xs: "0px" },
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.2px",
  background: "linear-gradient(90deg, #21A6DF 0%, #125A79 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const descriptionStyle = {
  color: "#000",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.2px",
};

const featureTextStyle = {
  color: "#000",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "0.2px",
};

// Service Card component for desktop
const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
  <Item>
    <Typography sx={titleStyle}>{service.title}</Typography>
    <Typography sx={descriptionStyle}>{service.description}</Typography>
    {service.features.map((feature, index) => (
      <FeatureItem key={feature} text={feature} isFirst={index === 0} />
    ))}
  </Item>
);

// Service Accordion component for mobile
const ServiceAccordion = ({ service }: { service: (typeof services)[0] }) => (
  <Accordion
    sx={{
      borderRadius: "20px !important",
      border: "1px solid #D7DFDF",
      background: "#FFF",
      boxShadow: "none",
      mb: 2,
      "&:before": {
        display: "none",
      },
      "&:hover": {
        boxShadow: "0px 6px 12px rgba(103, 103, 103, 0.25)",
      },
      position: "relative",
      overflow: "hidden",
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{
        minHeight: "auto !important",
        padding: { md: "16px 40px", xs: "16px 20px" },
        "& .MuiAccordionSummary-content": {
          margin: "0 !important",
        },
      }}
    >
      <Typography sx={titleStyle}>{service.title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: "0 40px 16px 40px" }}>
      <Typography sx={descriptionStyle}>{service.description}</Typography>
      {service.features.map((feature, index) => (
        <FeatureItem key={feature} text={feature} isFirst={index === 0} />
      ))}
    </AccordionDetails>
  </Accordion>
);

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        paddingY: "44px",
        paddingX: "40px",
        width: "100%",
        minHeight: "288px",
        flexShrink: 0,
        borderRadius: "20px",
        border: "1px solid #D7DFDF",
        background: "#FFF",

        "& .line": {
          display: "none",
        },
        "&:hover": {
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
          "& .line": {
            display: "block",
          },
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className="line"
        sx={{
          position: "absolute",
          borderRadius: "100px 0 0 100px",
          height: "100%",
          width: "6px",
          background: "linear-gradient(to bottom, #16345D 0%, #21A6DF 100%)",
          top: 0,
          left: 0,
        }}
      ></Box>
      {children}
    </Box>
  );
}

// Main component
export default function Service() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile view with accordions
  if (isMobile) {
    return (
      <Box>
        {services.map((service, index) => (
          <ServiceAccordion key={index} service={service} />
        ))}
      </Box>
    );
  }

  // Desktop view (original layout)
  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {services.map((service, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }} sx={{}}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
