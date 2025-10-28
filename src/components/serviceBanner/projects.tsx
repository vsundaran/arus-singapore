import { Box, Grid, Typography } from "@mui/material";
import Financial from "../../assets/img/Financial-Data-Lake.svg";
import ChallengeCard from "./challengeCard";
import SolutionCard from "./solutionCard";
import PerformanceCard from "./performance";
import ClientSpeak from "./clientSpeak";

export default function ServiceProject() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "500px",
        height: "100%",
        overflow: "hidden",
        borderRadius: "25px",
        border: "1px solid #CCD6D8",
        background: "#FFF",
      }}
    >
      <Box
        display={{ md: "flex", xs: "block" }}
        sx={{
          paddingY: "23px",
          paddingX: "19px",
          width: "100%",
          minHeight: "110px",
          gap: "50px",
          flexShrink: 0,
          alignItems: "center",
          borderRadius: "25px 25px 0 0",
          background: "linear-gradient(91deg, #1C4064 17%, #3981CA 97.07%)",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <img src={Financial} />
          <Box ml={"21px"}>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "0.2px",
              }}
            >
              Financial Data Lake
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "0.2px",
                background: "linear-gradient(90deg, #D78E28 0%, #FFD12B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Major Singapore Bank
            </Typography>
          </Box>
        </Box>

        <Box display={{ xs: "flex", md: "none" }} justifyContent={"end"}>
          <Location />
        </Box>

        <Box
          height={"100%"}
          width={"1px"}
          sx={{
            background: "#FFFFFF",
            minHeight: "78px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        />
        <Typography
          sx={{
            maxWidth: "334px",
            color: "#FFF",
            fontSize: "12px",
            fontStyle: "normal",
            lineHeight: "20px",
            letterSpacing: "0.2px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          Built a real-time data lake processing $100B+ daily transactions.Built
          a real-time data lake processing $100B+ daily transactions. Built a
          real-time data lake processing $100B+ daily transactions.
        </Typography>
        <Box
          height={"100%"}
          width={"1px"}
          sx={{
            background: "#FFFFFF",
            minHeight: "78px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        />

        <Box display={{ md: "flex", xs: "none" }}>
          <Location />
        </Box>
      </Box>

      <Box mx={"27px"} my={"19px"}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ChallengeCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SolutionCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <PerformanceCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ClientSpeak />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const Location = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"20px"}
    >
      <Box display={"flex"} gap={"12px"} alignItems={"center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7.32654 12.145C7.23134 12.2134 7.11708 12.2501 6.99987 12.2501C6.88266 12.2501 6.76841 12.2134 6.67321 12.145C3.85629 10.1372 0.866705 6.00717 3.88896 3.02283C4.71866 2.20666 5.83603 1.74949 6.99987 1.75C8.16654 1.75 9.28596 2.20792 10.1108 3.02225C13.133 6.00658 10.1435 10.136 7.32654 12.145Z"
            stroke="#FFD12B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.00065 6.99999C7.31007 6.99999 7.60682 6.87707 7.82561 6.65828C8.0444 6.43949 8.16732 6.14274 8.16732 5.83332C8.16732 5.5239 8.0444 5.22716 7.82561 5.00837C7.60682 4.78957 7.31007 4.66666 7.00065 4.66666C6.69123 4.66666 6.39449 4.78957 6.17569 5.00837C5.9569 5.22716 5.83398 5.5239 5.83398 5.83332C5.83398 6.14274 5.9569 6.43949 6.17569 6.65828C6.39449 6.87707 6.69123 6.99999 7.00065 6.99999Z"
            stroke="#FFD12B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.2px",
          }}
        >
          Singapore
        </Typography>
      </Box>
      <Box display={"flex"} gap={"12px"} alignItems={"center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M1.89648 5.39582H12.1048M4.29457 2.77082V1.60416M9.6904 2.77082V1.60416M10.0632 2.77082H3.93815C3.39667 2.77082 2.87736 2.98593 2.49447 3.36881C2.11159 3.7517 1.89648 4.27101 1.89648 4.81249V10.3542C1.89648 10.8956 2.11159 11.4149 2.49447 11.7978C2.87736 12.1807 3.39667 12.3958 3.93815 12.3958H10.0632C10.6046 12.3958 11.1239 12.1807 11.5068 11.7978C11.8897 11.4149 12.1048 10.8956 12.1048 10.3542V4.81249C12.1048 4.27101 11.8897 3.7517 11.5068 3.36881C11.1239 2.98593 10.6046 2.77082 10.0632 2.77082Z"
            stroke="#FFD12B"
            stroke-width="0.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Typography
          sx={{
            color: "#FFF",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.2px",
            whiteSpace: "nowrap",
          }}
        >
          04 years
        </Typography>
      </Box>
    </Box>
  );
};
