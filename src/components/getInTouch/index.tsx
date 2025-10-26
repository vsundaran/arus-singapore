import React from "react";
import BannerDivider from "../../atomic-elements/bannerDivider";
import { Box, Typography } from "@mui/material";
import email from "../../assets/img/email.svg";
import location from "../../assets/img/location.svg";

const textStyle: React.CSSProperties = {
  textAlign: "center",
  fontFamily: '"General Sans Variable", sans-serif',
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  letterSpacing: "0.2px",
  background: "linear-gradient(90deg, #F2C029 0%, #8C6F18 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const GetInTouchBanner: React.FC = () => {
  // Common styles

  return (
    <Box>
      <BannerDivider label="Get in Touch " />
      <Box mt={"15px"}>
        <center>
          <div style={textStyle}>Ready to Transform Your Business?</div>
        </center>
      </Box>
      <Box
        mt={3}
        maxWidth={"1500px"}
        display={"flex"}
        mx={"auto"}
        gap={"58px"}
        justifyContent={"center"}
      >
        <EmailCard />
        <LocationCard />
      </Box>
    </Box>
  );
};

export default GetInTouchBanner;

const EmailCard = () => {
  return (
    <Box
      sx={{
        paddingY: "14px",
        paddingX: "15px",
        width: "638px",
        height: "80px",
        flexShrink: 0,
        borderRadius: "15px",
        border: "1px solid #D0D2D3",
        background: "#FFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} gap={"22px"} alignItems={"center"}>
        <img src={email} style={{ width: "45px" }} />
        <Box>
          <Typography
            sx={{
              color: "#D78E28",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.2px",
            }}
          >
            Email
          </Typography>
          <Typography
            sx={{
              mt: "-6px",
              color: "#000",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.2px",
            }}
          >
            abc@gmail.com
          </Typography>
        </Box>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.24 2H11.346C9.582 2 8.184 2 7.091 2.148C5.965 2.3 5.054 2.62 4.336 3.341C3.617 4.062 3.298 4.977 3.147 6.107C3 7.205 3 8.608 3 10.379V16.217C3 17.725 3.92 19.017 5.227 19.559C5.16 18.649 5.16 17.374 5.16 16.312V11.302C5.16 10.021 5.16 8.916 5.278 8.032C5.405 7.084 5.691 6.176 6.425 5.439C7.159 4.702 8.064 4.415 9.008 4.287C9.888 4.169 10.988 4.169 12.265 4.169H15.335C16.611 4.169 17.709 4.169 18.59 4.287C18.3261 3.61329 17.8653 3.03474 17.2678 2.62678C16.6702 2.21883 15.9635 2.00041 15.24 2Z"
          fill="#A8AFB0"
        />
        <path
          d="M6.59961 11.3968C6.59961 8.67077 6.59961 7.30777 7.44361 6.46077C8.28661 5.61377 9.64361 5.61377 12.3596 5.61377H15.2396C17.9546 5.61377 19.3126 5.61377 20.1566 6.46077C21.0006 7.30777 20.9996 8.67077 20.9996 11.3968V16.2168C20.9996 18.9428 20.9996 20.3058 20.1566 21.1528C19.3126 21.9998 17.9546 21.9998 15.2396 21.9998H12.3596C9.64461 21.9998 8.28661 21.9998 7.44361 21.1528C6.59961 20.3058 6.59961 18.9428 6.59961 16.2168V11.3968Z"
          fill="#A8AFB0"
        />
      </svg>
    </Box>
  );
};
const LocationCard = () => {
  return (
    <Box
      sx={{
        paddingY: "14px",
        paddingX: "15px",
        width: "638px",
        height: "80px",
        flexShrink: 0,
        borderRadius: "15px",
        border: "1px solid #D0D2D3",
        background: "#FFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} gap={"22px"} alignItems={"center"}>
        <img src={location} style={{ width: "45px" }} />
        <Box>
          <Typography
            sx={{
              color: "#D78E28",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.2px",
            }}
          >
            Address
          </Typography>
          <Typography
            sx={{
              mt: "-6px",
              color: "#000",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0.2px",
            }}
          >
            Paya Lebar 60 Paya Lebar Road, #12-55 Paya Lebar Square, Singapore -
            409 051
          </Typography>
        </Box>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.24 2H11.346C9.582 2 8.184 2 7.091 2.148C5.965 2.3 5.054 2.62 4.336 3.341C3.617 4.062 3.298 4.977 3.147 6.107C3 7.205 3 8.608 3 10.379V16.217C3 17.725 3.92 19.017 5.227 19.559C5.16 18.649 5.16 17.374 5.16 16.312V11.302C5.16 10.021 5.16 8.916 5.278 8.032C5.405 7.084 5.691 6.176 6.425 5.439C7.159 4.702 8.064 4.415 9.008 4.287C9.888 4.169 10.988 4.169 12.265 4.169H15.335C16.611 4.169 17.709 4.169 18.59 4.287C18.3261 3.61329 17.8653 3.03474 17.2678 2.62678C16.6702 2.21883 15.9635 2.00041 15.24 2Z"
          fill="#A8AFB0"
        />
        <path
          d="M6.59961 11.3968C6.59961 8.67077 6.59961 7.30777 7.44361 6.46077C8.28661 5.61377 9.64361 5.61377 12.3596 5.61377H15.2396C17.9546 5.61377 19.3126 5.61377 20.1566 6.46077C21.0006 7.30777 20.9996 8.67077 20.9996 11.3968V16.2168C20.9996 18.9428 20.9996 20.3058 20.1566 21.1528C19.3126 21.9998 17.9546 21.9998 15.2396 21.9998H12.3596C9.64461 21.9998 8.28661 21.9998 7.44361 21.1528C6.59961 20.3058 6.59961 18.9428 6.59961 16.2168V11.3968Z"
          fill="#A8AFB0"
        />
      </svg>
    </Box>
  );
};
