import { Box, Typography } from "@mui/material";

export default function ClientSpeak() {
  return (
    <Box
      sx={{
        maxWidth: "550px",
        height: "100%",
        padding: "16px",
        flexShrink: 0,
        borderRadius: "10px",
        border: "1px solid #FFEBA2",
        background: "#FFFAEA",
      }}
    >
      <Box display={"flex"} alignItems={"center"} mb={"6px"} gap={"8px"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.50065 12.64V14.6666H7.50065V12.64C6.35614 12.5166 5.29759 11.9746 4.52847 11.1182C3.75935 10.2617 3.33394 9.15112 3.33398 7.99998V6.66665H4.33398V7.99998C4.33398 8.97244 4.72029 9.90507 5.40793 10.5927C6.09556 11.2803 7.02819 11.6666 8.00065 11.6666C8.97311 11.6666 9.90574 11.2803 10.5934 10.5927C11.281 9.90507 11.6673 8.97244 11.6673 7.99998V6.66665H12.6673V7.99998C12.6674 9.15112 12.2419 10.2617 11.4728 11.1182C10.7037 11.9746 9.64516 12.5166 8.50065 12.64ZM5.33398 3.99998C5.33398 3.29274 5.61494 2.61446 6.11503 2.11436C6.61513 1.61426 7.29341 1.33331 8.00065 1.33331C8.7079 1.33331 9.38617 1.61426 9.88627 2.11436C10.3864 2.61446 10.6673 3.29274 10.6673 3.99998V7.99998C10.6673 8.70722 10.3864 9.3855 9.88627 9.8856C9.38617 10.3857 8.7079 10.6666 8.00065 10.6666C7.29341 10.6666 6.61513 10.3857 6.11503 9.8856C5.61494 9.3855 5.33398 8.70722 5.33398 7.99998V3.99998Z"
            fill="#FFCD17"
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
          Client Speak
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
        }}
      >
        Arus transformed our entire data infrastructure in ways we never thought
        possible. Before their intervention, we were drowning in fragmented data
        across 150+ legacy systems. Risk analysis took weeks, regulatory
        reporting was a nightmare, and we were constantly playing catch-up with
        compliance issues. The manual processes were not just inefficient - they
        were putting us at serious risk for fraud detection failures. When Arus
        came in with their data lake solution, everything changed. The real-time
        processing of $100B+ daily transactions seemed impossible, but they
        delivered.
      </Typography>
    </Box>
  );
}
