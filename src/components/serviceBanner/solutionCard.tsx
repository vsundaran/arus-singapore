import { Box, Typography } from "@mui/material";

export default function SolutionCard() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        minHeight: "148px",
        padding: "16px",
        flexShrink: 0,
        borderRadius: "10px",
        border: "1px solid #8FFFBC",
        background: "#F0FDF4",
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
            d="M13.2438 16.7297V15.6841C13.2438 14.4206 14.6179 13.2256 15.5093 12.373C16.7657 11.1719 17.4262 9.55814 17.4262 7.66777C17.4262 4.18241 14.6497 1.39413 11.1526 1.39413C10.3281 1.39183 9.51123 1.55253 8.74903 1.867C7.98684 2.18146 7.29433 2.64349 6.71131 3.22651C6.12829 3.80953 5.66626 4.50204 5.3518 5.26423C5.03733 6.02642 4.87663 6.84326 4.87893 7.66777C4.87893 9.49061 5.56772 11.2137 6.79588 12.373C7.68246 13.2099 9.06136 14.4076 9.06136 15.6841V16.7297M9.75843 20.9121H12.5467M9.06136 18.8209H13.2438M11.1526 16.7297V11.1531"
            stroke="#00C951"
            stroke-width="1.375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8091 10.4561C12.8091 10.4561 11.872 11.1531 11.1536 11.1531C10.4352 11.1531 9.49805 10.4561 9.49805 10.4561"
            stroke="#00C951"
            stroke-width="1.375"
            stroke-linecap="round"
            stroke-linejoin="round"
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
          Solution
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
      <Box
        display={{ md: "flex", xs: "block" }}
        gap={"12px"}
        mt={1}
        flexWrap={"nowrap"}
        alignItems={"start"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          mb={"6px"}
          gap={"8px"}
          flexWrap={"nowrap"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.75 11L8 14.25L14.25 11M1.75 8L8 11.25L14.25 8M8 1.75L1.75 5L8 8.25L14.25 5L8 1.75Z"
              stroke="#D78E28"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              whiteSpace: "nowrap",
            }}
          >
            Technology Stack
          </Typography>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          flexWrap={"wrap"}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: 64,
              padding: "0 27px 0 15px",
              alignItems: "center",
              borderRadius: "10px",
              border: "1px solid #BCEBFF",
              background: "#FFF",
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
              }}
            >
              AWS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: 64,
              padding: "0 27px 0 15px",
              alignItems: "center",
              borderRadius: "10px",
              border: "1px solid #BCEBFF",
              background: "#FFF",
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
              }}
            >
              Spark
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: 64,
              padding: "0 27px 0 15px",
              alignItems: "center",
              borderRadius: "10px",
              border: "1px solid #BCEBFF",
              background: "#FFF",
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
              }}
            >
              Kafka
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: 64,
              padding: "0 27px 0 15px",
              alignItems: "center",
              borderRadius: "10px",
              border: "1px solid #BCEBFF",
              background: "#FFF",
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
              }}
            >
              Snowflake
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: 64,
              padding: "0 27px 0 15px",
              alignItems: "center",
              borderRadius: "10px",
              border: "1px solid #BCEBFF",
              background: "#FFF",
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
              }}
            >
              Snowflake
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
