import { Box, Typography } from "@mui/material";

export default function ChallengeCard() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "100%",
        padding: "16px",
        flexShrink: 0,
        borderRadius: "10px",
        border: "1px solid #FFC7C7",
        background: "#FFEBEB",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            d="M11.1528 5.1221C11.6743 5.1221 12.1929 5.45112 12.5879 6.10915L18.0827 15.2677C18.8736 16.5829 18.263 17.6592 16.7294 17.6592H5.57628C4.04272 17.6592 3.43208 16.582 4.22303 15.2677L9.71781 6.10915C10.1128 5.45112 10.6314 5.1221 11.1528 5.1221ZM11.1528 3.26324C9.94831 3.26324 8.846 3.95102 8.12384 5.15091L2.62906 14.3114C1.89853 15.528 1.8186 16.8255 2.41064 17.8711C3.00269 18.9167 4.15704 19.518 5.57628 19.518H16.7294C18.1487 19.518 19.3039 18.9176 19.895 17.872C20.4862 16.8264 20.4072 15.5289 19.6766 14.3123L14.1819 5.1537C13.4597 3.95102 12.3574 3.26324 11.1528 3.26324Z"
            fill="#DC1717"
          />
          <path
            d="M11.1536 16.0791C11.8209 16.0791 12.3618 15.5382 12.3618 14.8709C12.3618 14.2036 11.8209 13.6626 11.1536 13.6626C10.4863 13.6626 9.94531 14.2036 9.94531 14.8709C9.94531 15.5382 10.4863 16.0791 11.1536 16.0791Z"
            fill="#DC1717"
          />
          <path
            d="M12.5464 9.29429C12.5464 8.52286 11.9228 7.90015 11.1523 7.90015C10.9242 7.90041 10.6996 7.95664 10.4983 8.06391C10.297 8.17118 10.1251 8.32621 9.99764 8.5154C9.87019 8.70459 9.79112 8.92216 9.76735 9.14903C9.74359 9.3759 9.77585 9.60513 9.86132 9.81663C10.3762 11.0955 11.1523 13.012 11.1523 13.012L12.4451 9.81663C12.5083 9.65584 12.5464 9.47925 12.5464 9.29429Z"
            fill="#DC1717"
          />
        </svg>
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
          Challenge
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#000",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.2px",
          width: "100%",
        }}
      >
        The bank struggled with fragmented data across 150+ legacy systems,
        making risk analysis and regulatory reporting take weeks. Manual
        processes led to compliance issues and missed opportunities for
        real-time fraud detection.
      </Typography>
    </Box>
  );
}
