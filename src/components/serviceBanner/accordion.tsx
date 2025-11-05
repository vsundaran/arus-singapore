import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import ServiceCard from "../../atomic-elements/card";
import coder from "../../assets/img/coder.jpg";
import db from "../../assets/img/db.svg";

import web from "../../assets/img/web.svg";
import laptop from "../../assets/img/laptop.jpg";
import TabPaper from "./tab";
import ServiceTabElement from "./tabElements";
import { useLocation } from "react-router-dom";

export default function AccordionExpandIcon() {
  const [expandedPanel, setExpandedPanel] = React.useState<string | null>(
    () => {
      const params = new URLSearchParams(window.location.search);
      const openParam = params.get("open");
      if (openParam === "data-engineering") return "dataEngineering";
      if (openParam === "application-development") return "appDevelopment";
      return null;
    }
  );

  const handleToggle = (panel: string) => {
    setExpandedPanel((prev) => (prev === panel ? null : panel));
  };

  const location = useLocation();
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const openParam = params.get("open");
    if (openParam === "data-engineering") {
      setExpandedPanel("dataEngineering");
    } else if (openParam === "application-development") {
      setExpandedPanel("appDevelopment");
    }
  }, [location.search]);

  return (
    <div>
      <Box
        width={"100%"}
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center" }}
        maxWidth={"100%"}
        gap={{ md: "39px", xs: "0px" }}
        justifyContent={"center"}
        className="service-cards"
      >
        <Box data-aos="fade-right">
          <Accordion
            sx={{ padding: "0px", boxShadow: "none" }}
            expanded={expandedPanel === "dataEngineering"}
            onChange={() => handleToggle("dataEngineering")}
          >
            <AccordionSummary
              sx={{ padding: "0px", "& > span": { margin: "0px" } }}
              expandIcon={null}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Box>
                <ServiceCard
                  sx={{
                    display: { xs: "block", md: "flex" },
                    alignItems: "normal",
                    justifyContent: "end",
                    transition:
                      "box-shadow 0.3s ease-in-out, background 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
                      background: "#E0F0F7",
                      "& .down-arrow": {
                        background: "white",
                      },
                    },
                  }}
                  onMouseEnter={(e: any) => {
                    const img = e.currentTarget.querySelector("img");
                    img.style.transition = "transform 0.3s ease-in-out";
                    img.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (!img) return;
                    img.style.transition = "transform 0.3s ease-in-out";
                    img.style.transform = "scale(1)";
                  }}
                >
                  <Box
                    sx={{ width: "100%", display: "flex", overflow: "hidden" }}
                  >
                    <img
                      src={coder}
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <Box
                    overflow={"hidden"}
                    position={"relative"}
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"end"}
                    paddingX={{ md: "0px", xs: "20px" }}
                    paddingY={"12px"}
                    className="service-card-icon"
                  >
                    <Box
                      className="down-arrow"
                      sx={{
                        position: "absolute",
                        display: "flex",
                        pt: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "-20%",
                        right: "-5%",
                        width: "114px",
                        height: "114px",
                        borderRadius: "50%",
                        background: "#E0F0F7",
                        transition: "background 0.3s ease-in-out",
                      }}
                    >
                      <Box
                        sx={{
                          transform:
                            expandedPanel === "dataEngineering"
                              ? "rotate(180deg)"
                              : "unset",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="11"
                          viewBox="0 0 24 11"
                          fill="none"
                        >
                          <path
                            d="M12 10.2143C11.9016 10.2155 11.8041 10.1952 11.7137 10.1546C11.6233 10.114 11.542 10.0541 11.475 9.97857L4.725 2.90714C4.425 2.59286 4.425 2.10571 4.725 1.79143C5.025 1.47714 5.49 1.47714 5.79 1.79143L12.015 8.31286L18.225 1.80714C18.525 1.49286 18.99 1.49286 19.29 1.80714C19.59 2.12143 19.59 2.60857 19.29 2.92286L12.54 9.99428C12.39 10.1514 12.195 10.23 12.015 10.23L12 10.2143Z"
                            fill="#325A7D"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <img src={db} style={{ maxWidth: "42px" }} />
                    <Typography
                      fontWeight={600}
                      mb={"4px"}
                      mt={"12px"}
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        // lineHeight: "20px",
                        letterSpacing: "0.2px",
                        background:
                          "linear-gradient(90deg, #21A6DF 0%, #125A79 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Data Engineering & Analytics
                    </Typography>
                    <Typography
                      sx={{
                        width: "260px",
                        color: "#000000",
                        fontFamily: "General Sans Variable",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      End-to-end data pipeline solutions for modern businesses
                    </Typography>
                  </Box>
                </ServiceCard>
              </Box>
            </AccordionSummary>
          </Accordion>
        </Box>

        <Box
          width={"100%"}
          sx={{
            height: expandedPanel === "dataEngineering" ? "fit-content" : "0px",
            overflow: "hidden",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            mb: 4,
          }}
        >
          {expandedPanel === "dataEngineering" && (
            <Box display={"flex"} width={"100%"} justifyContent={"center"}>
              <TabPaper>
                <ServiceTabElement />
              </TabPaper>
            </Box>
          )}
        </Box>
        <Box data-aos="fade-left">
          <Accordion
            sx={{ padding: "0px", boxShadow: "none" }}
            expanded={expandedPanel === "appDevelopment"}
            onChange={() => handleToggle("appDevelopment")}
          >
            <AccordionSummary
              sx={{ padding: "0px", "& > span": { margin: "0px" } }}
              expandIcon={null}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <ServiceCard
                sx={{
                  display: { xs: "block", md: "flex" },
                  alignItems: "normal",
                  justifyContent: "end",
                  marginx: { xs: "auto", md: "none" },
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.25)",
                    background: "#E7FFF1",
                    "& .down-arrow": {
                      background: "white",
                    },
                  },
                }}
                onMouseEnter={(e: any) => {
                  const img = e.currentTarget.querySelector("img");
                  img.style.transition = "transform 0.3s ease-in-out";
                  img.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector("img");
                  if (!img) return;
                  img.style.transition = "transform 0.3s ease-in-out";
                  img.style.transform = "scale(1)";
                }}
              >
                <Box
                  sx={{ width: "100%", display: "flex", overflow: "hidden" }}
                >
                  <img
                    src={laptop}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box
                  overflow={"hidden"}
                  position={"relative"}
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"end"}
                  paddingX={{ md: "0px", xs: "20px" }}
                  paddingY={"12px"}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      pt: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "-20%",
                      right: "-5%",
                      width: "114px",
                      height: "114px",
                      borderRadius: "50%",
                      background: "#E7FFF1",
                    }}
                    className="down-arrow"
                  >
                    <Box
                      sx={{
                        transform:
                          expandedPanel === "appDevelopment"
                            ? "rotate(180deg)"
                            : "unset",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="11"
                        viewBox="0 0 24 11"
                        fill="none"
                      >
                        <path
                          d="M12 10.2143C11.9016 10.2155 11.8041 10.1952 11.7137 10.1546C11.6233 10.114 11.542 10.0541 11.475 9.97857L4.725 2.90714C4.425 2.59286 4.425 2.10571 4.725 1.79143C5.025 1.47714 5.49 1.47714 5.79 1.79143L12.015 8.31286L18.225 1.80714C18.525 1.49286 18.99 1.49286 19.29 1.80714C19.59 2.12143 19.59 2.60857 19.29 2.92286L12.54 9.99428C12.39 10.1514 12.195 10.23 12.015 10.23L12 10.2143Z"
                          fill="#325A7D"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <img src={web} style={{ maxWidth: "42px" }} />
                  <Typography
                    fontWeight={600}
                    mb={"4px"}
                    mt={"12px"}
                    sx={{
                      fontSize: "16px",
                      fontStyle: "normal",
                      // lineHeight: "20px",
                      letterSpacing: "0.2px",
                      background:
                        "linear-gradient(90deg, #21A6DF 0%, #125A79 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Application Development
                  </Typography>
                  <Typography
                    sx={{
                      width: "260px",
                      color: "#000000",
                      fontFamily: "General Sans Variable",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "20px",
                      letterSpacing: "0.2px",
                    }}
                  >
                    Modern web applications with cutting-edge technologies
                  </Typography>
                </Box>
              </ServiceCard>
            </AccordionSummary>
          </Accordion>
        </Box>

        <Box
          className="hello"
          width={"100%"}
          sx={{
            height: expandedPanel === "appDevelopment" ? "fit-content" : "0px",
            overflow: "hidden",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            mt: 1,
          }}
        >
          {expandedPanel === "appDevelopment" && (
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              className="hello"
            >
              <TabPaper>
                <ServiceTabElement />
              </TabPaper>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        className="hello"
        sx={{
          height: expandedPanel ? "fit-content" : "0px",
          overflow: "hidden",
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          mt: 1,
        }}
      >
        {expandedPanel === "dataEngineering" && (
          <Box display={"flex"} width={"100%"} justifyContent={"center"}>
            <TabPaper>
              <ServiceTabElement />
            </TabPaper>
          </Box>
        )}
        {expandedPanel === "appDevelopment" && (
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            className="hello"
          >
            <TabPaper>
              <ServiceTabElement />
            </TabPaper>
          </Box>
        )}
      </Box>
    </div>
  );
}
