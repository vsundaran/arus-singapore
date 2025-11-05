import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import ArusLogo from "../../assets/img/Arus-logo.svg";
import SingaporeChip from "../../atomic-elements/chip";
import NavLinkChip from "../../atomic-elements/navLinkChip";
import SideBar from "../menuSideDrawer";
import ServiceMenu from "./serviceMenu";
import PeopleMenu from "./peopleMenu";
import OrganizationsMenu from "./organisationMenu";

function ResponsiveAppBar() {
  return (
    <AppBar
      data-aos="fade-down"
      position="sticky"
      sx={{
        // mt: "0px",
        background: "linear-gradient(90deg, #0D2B53 0%, #4F729F 100%)",
        boxShadow: "0 8px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
    >
      <Container maxWidth="xl" sx={{ overflowX: "hidden" }}>
        <Toolbar disableGutters>
          <img
            src={ArusLogo}
            style={{
              marginTop: "8px",
              marginLeft: "-30px",
              marginRight: "56.2px",
            }}
          />

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Box display={{ xs: "none", lg: "flex" }} gap={"5px"}>
              <ServiceMenu />

              <NavLinkChip
                label="About"
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.66666 0C2.98478 0 0 2.98475 0 6.66666C0 10.3485 2.98478 13.3333 6.66666 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66666C13.3333 2.98475 10.3486 0 6.66666 0ZM6.66666 12C3.72588 12 1.33334 9.60747 1.33334 6.66666C1.33334 3.72584 3.72584 1.33334 6.66666 1.33334C9.6075 1.33334 12 3.72584 12 6.66666C12 9.60747 9.6075 12 6.66666 12ZM7.50147 4C7.50147 4.48338 7.14953 4.83334 6.67344 4.83334C6.17809 4.83334 5.83478 4.48334 5.83478 3.99075C5.83478 3.51731 6.18738 3.16669 6.67344 3.16669C7.14953 3.16669 7.50147 3.51731 7.50147 4ZM6.00147 6H7.33478V10H6.00147V6Z"
                      fill={"white"}
                    />
                  </svg>
                }
              />

              <PeopleMenu />

              <OrganizationsMenu />
              <NavLinkChip
                label="Testimonials"
                onClick={() => {
                  const element = document.getElementById("testimonials");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M5.51882 3.022C6.36349 1.50733 6.78549 0.75 7.41682 0.75C8.04816 0.75 8.47016 1.50733 9.31482 3.022L9.53349 3.414C9.77349 3.84467 9.89349 4.06 10.0802 4.202C10.2668 4.344 10.5002 4.39667 10.9668 4.502L11.3908 4.598C13.0308 4.96933 13.8502 5.15467 14.0455 5.782C14.2402 6.40867 13.6815 7.06267 12.5635 8.37L12.2742 8.708C11.9568 9.07933 11.7975 9.26533 11.7262 9.49467C11.6548 9.72467 11.6788 9.97267 11.7268 10.468L11.7708 10.9193C11.9395 12.664 12.0242 13.536 11.5135 13.9233C11.0028 14.3107 10.2348 13.9573 8.70016 13.2507L8.30216 13.068C7.86616 12.8667 7.64816 12.7667 7.41682 12.7667C7.18549 12.7667 6.96749 12.8667 6.53149 13.068L6.13416 13.2507C4.59882 13.9573 3.83082 14.3107 3.32082 13.924C2.80949 13.536 2.89416 12.664 3.06282 10.9193L3.10682 10.4687C3.15482 9.97267 3.17882 9.72467 3.10682 9.49533C3.03616 9.26533 2.87682 9.07933 2.55949 8.70867L2.27016 8.37C1.15216 7.06333 0.59349 6.40933 0.788157 5.782C0.982823 5.15467 1.80349 4.96867 3.44349 4.598L3.86749 4.502C4.33349 4.39667 4.56616 4.344 4.75349 4.202C4.94082 4.06 5.06016 3.84467 5.30016 3.414L5.51882 3.022Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                }
              />
              <NavLinkChip
                label="Contacts"
                onClick={() => {
                  const element = document.getElementById("aspire");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M12.6673 2.66669H3.33398C2.80355 2.66669 2.29484 2.8774 1.91977 3.25247C1.5447 3.62755 1.33398 4.13625 1.33398 4.66669V11.3334C1.33398 11.8638 1.5447 12.3725 1.91977 12.7476C2.29484 13.1226 2.80355 13.3334 3.33398 13.3334H12.6673C13.1978 13.3334 13.7065 13.1226 14.0815 12.7476C14.4566 12.3725 14.6673 11.8638 14.6673 11.3334V4.66669C14.6673 4.13625 14.4566 3.62755 14.0815 3.25247C13.7065 2.8774 13.1978 2.66669 12.6673 2.66669ZM12.2207 4.00002L8.00065 7.16669L3.78065 4.00002H12.2207ZM12.6673 12H3.33398C3.15717 12 2.9876 11.9298 2.86258 11.8048C2.73756 11.6797 2.66732 11.5102 2.66732 11.3334V4.83335L7.60065 8.53335C7.71605 8.6199 7.8564 8.66669 8.00065 8.66669C8.1449 8.66669 8.28525 8.6199 8.40065 8.53335L13.334 4.83335V11.3334C13.334 11.5102 13.2637 11.6797 13.1387 11.8048C13.0137 11.9298 12.8441 12 12.6673 12Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </Box>

            <Box sx={{ flexGrow: 0 }} display={{ xs: "none", lg: "flex" }}>
              <Box mr={"-50px"}>
                <SingaporeChip />
              </Box>
            </Box>
            <Box
              sx={{ width: "100%" }}
              display={{ xs: "flex", lg: "none" }}
              justifyContent={"end"}
            >
              <SideBar />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
