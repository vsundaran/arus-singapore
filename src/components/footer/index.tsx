import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          minHeight: 300,
          paddingX: { md: "84px", xs: "30px" },
          paddingY: { md: "44px", xs: "30px" },
          flexShrink: 0,
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          borderRadius: "50px 50px 0 0",
          background: "linear-gradient(90deg, #0D2B53 0%, #2162B8 100%)",
        }}
      >
        <Detail
          title="ARUS"
          content={[
            "Delivering smart, data-driven solutions that drive innovation and growth for our customers",
          ]}
        />
        <Detail
          title="Services"
          content={["Data Engineering & Analytics", "Application Development"]}
        />
        <Detail
          title="Company"
          content={["About", "People", "Organizations", "Testimonials"]}
        />
        <Detail
          title="Connect"
          content={["LinkedIn", "Twitter", "Facebook", "Instagram"]}
        />
      </Box>
      <Box
        height={"70px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ background: { md: "#E4F0FF", xs: "transparent" } }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "40px",
            letterSpacing: "0.2px",
          }}
        >
          © 2025 Arus. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

const Detail = ({ title, content }: { title: string; content: string[] }) => {
  return (
    <Box maxWidth={"296px"} mb={{ md: 0, xs: 5 }}>
      <Typography
        mb={{ md: 3, xs: 0 }}
        component="h2"
        sx={{
          color: "#FFD12B",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "30px",
          letterSpacing: "0.2px",
        }}
      >
        {title}
      </Typography>
      {content.map((paragraph, index) => (
        <Typography
          mb={1}
          key={index}
          variant="body2"
          component="p"
          sx={{
            color: "#FFF",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "30px",
            letterSpacing: "0.2px",
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};
