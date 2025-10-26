import { Avatar, Box, Grid, Typography } from "@mui/material";
import elan from "../../assets/img/elan.svg";

// Reusable Typography components
const NameTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      mb: "2px",
      color: "#000",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "0.2px",
    }}
  >
    {children}
  </Typography>
);

const GradientTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontSize: "12px",
      mb: "12px",
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
    {children}
  </Typography>
);

const InfoTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "#000",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "20px",
      letterSpacing: "0.2px",
    }}
  >
    {children}
  </Typography>
);

const DescriptionTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "#000",
      maxWidth: "516px",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.2px",
    }}
  >
    {children}
  </Typography>
);

// SVG Icons
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M7.32654 12.145C7.23134 12.2134 7.11708 12.2501 6.99987 12.2501C6.88266 12.2501 6.76841 12.2134 6.67321 12.145C3.85629 10.1372 0.866705 6.00717 3.88896 3.02283C4.71866 2.20666 5.83603 1.74949 6.99987 1.75C8.16654 1.75 9.28596 2.20792 10.1108 3.02225C13.133 6.00658 10.1435 10.136 7.32654 12.145Z"
      stroke="url(#paint0_linear_2294_5439)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.00065 7.00008C7.31007 7.00008 7.60682 6.87716 7.82561 6.65837C8.0444 6.43958 8.16732 6.14283 8.16732 5.83341C8.16732 5.524 8.0444 5.22725 7.82561 5.00846C7.60682 4.78966 7.31007 4.66675 7.00065 4.66675C6.69123 4.66675 6.39449 4.78966 6.17569 5.00846C5.9569 5.22725 5.83398 5.524 5.83398 5.83341C5.83398 6.14283 5.9569 6.43958 6.17569 6.65837C6.39449 6.87716 6.69123 7.00008 7.00065 7.00008Z"
      stroke="url(#paint1_linear_2294_5439)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2294_5439"
        x1="6.99987"
        y1="1.75"
        x2="6.99987"
        y2="12.2501"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78E28" />
        <stop offset="1" stopColor="#FFD12B" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2294_5439"
        x1="7.00065"
        y1="4.66675"
        x2="7.00065"
        y2="7.00008"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78E28" />
        <stop offset="1" stopColor="#FFD12B" />
      </linearGradient>
    </defs>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M1.89648 5.39591H12.1048M4.29457 2.77091V1.60425M9.6904 2.77091V1.60425M10.0632 2.77091H3.93815C3.39667 2.77091 2.87736 2.98602 2.49447 3.36891C2.11159 3.75179 1.89648 4.2711 1.89648 4.81258V10.3542C1.89648 10.8957 2.11159 11.415 2.49447 11.7979C2.87736 12.1808 3.39667 12.3959 3.93815 12.3959H10.0632C10.6046 12.3959 11.1239 12.1808 11.5068 11.7979C11.8897 11.415 12.1048 10.8957 12.1048 10.3542V4.81258C12.1048 4.2711 11.8897 3.75179 11.5068 3.36891C11.1239 2.98602 10.6046 2.77091 10.0632 2.77091Z"
      stroke="url(#paint0_linear_2294_5443)"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2294_5443"
        x1="7.00065"
        y1="1.60425"
        x2="7.00065"
        y2="12.3959"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78E28" />
        <stop offset="1" stopColor="#FFD12B" />
      </linearGradient>
    </defs>
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM10.783 7.99L16.427 11.126C16.5828 11.2126 16.7126 11.3393 16.803 11.493C16.8934 11.6467 16.9411 11.8217 16.9411 12C16.9411 12.1783 16.8934 12.3533 16.803 12.507C16.7126 12.6607 16.5828 12.7874 16.427 12.874L10.783 16.01C10.6002 16.1116 10.3941 16.1636 10.1851 16.161C9.97599 16.1584 9.77123 16.1013 9.59107 15.9952C9.4109 15.8891 9.26159 15.7377 9.15791 15.5562C9.05424 15.3746 8.9998 15.1691 9 14.96V9.04C8.9998 8.83092 9.05424 8.62541 9.15791 8.44384C9.26159 8.26227 9.4109 8.11094 9.59107 8.00484C9.77123 7.89874 9.97599 7.84156 10.1851 7.83895C10.3941 7.83635 10.6002 7.88842 10.783 7.99Z"
      fill="#A8AFB0"
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="21"
    viewBox="0 0 18 21"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H15ZM5 7C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14C5.26522 14 5.51957 13.8946 5.70711 13.7071C5.89464 13.5196 6 13.2652 6 13V8C6 7.73478 5.89464 7.48043 5.70711 7.29289C5.51957 7.10536 5.26522 7 5 7ZM8 6C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7V13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14C8.26522 14 8.51957 13.8946 8.70711 13.7071C8.89464 13.5196 9 13.2652 9 13V9.34C9.305 8.996 9.82 8.592 10.393 8.347C10.726 8.205 11.227 8.147 11.575 8.257C11.6904 8.28629 11.7933 8.35226 11.868 8.445C11.92 8.515 12 8.671 12 9V13C12 13.2652 12.1054 13.5196 12.2929 13.7071C12.4804 13.8946 12.7348 14 13 14C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V9C14 8.33 13.83 7.734 13.476 7.256C13.1503 6.82256 12.6944 6.50472 12.175 6.349C11.273 6.066 10.274 6.223 9.607 6.509C9.39347 6.60084 9.18545 6.70502 8.984 6.821C8.94208 6.59059 8.82062 6.3822 8.6408 6.23216C8.46097 6.08213 8.23419 5.99996 8 6ZM5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5C6 4.73478 5.89464 4.48043 5.70711 4.29289C5.51957 4.10536 5.26522 4 5 4Z"
      fill="#A8AFB0"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.341 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6722 20.477L10.0762 20.751C7.77323 21.811 6.62123 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.34923 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28624 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z"
      fill="#FFD12B"
    />
  </svg>
);

// Info Item component
const InfoItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box display="flex" gap="4px" alignItems="center">
    {icon}
    <InfoTypography>{text}</InfoTypography>
  </Box>
);

// Section Header component
const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      mb: "6px",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "20px",
      letterSpacing: "0.2px",
      background: "linear-gradient(90deg, #D78E28 0%, #FFD12B 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {children}
  </Typography>
);

const Chip = ({ label = "" }: { label: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "42px",
        height: "16px",
        padding: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexShrink: 0,
        borderRadius: "5px",
        border: "1px solid #E2EEEF",
        background: "#F0FBFF",
      }}
    >
      <Typography
        sx={{
          color: "#000",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "30px",
          letterSpacing: "0.2px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function LeaderCard() {
  return (
    <Box
      sx={{
        padding: "12px 18px",
        width: "100%",
        height: "401px",
        flexShrink: 0,
        borderRadius: "25px",
        border: "1px solid #A8AFB0",
        backgroundColor: "#FFF",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="start">
        <Box display="flex" gap="10px" alignItems="center">
          <Avatar src={elan} sx={{ width: "135px", height: "135px" }} />
          <Box>
            <NameTypography>Elan Chezhian</NameTypography>
            <GradientTypography>Founder & CEO</GradientTypography>
            <Box display="flex" alignItems="center" gap="10px">
              <InfoItem icon={<LocationIcon />} text="Singapore" />
              <InfoItem icon={<CalendarIcon />} text="20 years" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={3} gap="17px">
          <PlayIcon />
          <PortfolioIcon />
        </Box>
      </Box>

      <Box paddingX={3} mt={2}>
        <DescriptionTypography>
          Alex is a data engineering expert with extensive experience in
          building large-scale data pipelines for financial institutions. He has
          led multiple projects processing petabytes of data daily with 99.9%
          uptime.
        </DescriptionTypography>

        <Box mt={1}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={6}>
              <Box>
                <SectionHeader>Technical:</SectionHeader>
                <Box display="flex" gap="10px" flexWrap="wrap">
                  <Chip label="AWS" />
                  <Chip label="Spark" />
                  <Chip label="Kafka" />
                  <Chip label="Snowflake" />
                </Box>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box>
                <SectionHeader>Functional:</SectionHeader>
                <Box display="flex" gap="10px" flexWrap="wrap">
                  <Chip label="Banking" />
                  <Chip label="Financial Services" />
                  <Chip label="Insurance" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={2} display="flex" alignItems="center" gap="16px">
          <StarIcon />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "10px 20px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "20px",
              background: "#FBF8EE",
            }}
          >
            <DescriptionTypography>
              "Alex delivered a game-changing data pipeline that processes our
              daily transactions with 99.9% uptime. His expertise in Apache
              Spark and AWS saved us millions."— Tech Director, DBS Bank
            </DescriptionTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
