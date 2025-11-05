import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import NavLinkChip from "../../atomic-elements/navLinkChip";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ServiceMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Nav = useNavigate();

  const scoll = () => {
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Button
        sx={{
          padding: 0,
          margin: 0,
          minWidth: 0,
          textTransform: "none",
          borderRadius: "25px",
        }}
        id="basic-IconButton"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <NavLinkChip
          label="Services"
          deleteIcon={
            <Box
              sx={{
                transform: open
                  ? "rotate(180deg) translateY(-4px)"
                  : "rotate(0deg)",
                transition: "0.3s",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14 5L7.5 12L1 5"
                  stroke="white"
                  stroke-linecap="square"
                />
              </svg>
            </Box>
          }
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
            >
              <path
                d="M9 6.33333V9.66667C9 10.7713 7.20933 11.6667 5 11.6667C2.79067 11.6667 1 10.7713 1 9.66667V6.33333M9 6.33333V3M9 6.33333C9 7.438 7.20933 8.33333 5 8.33333C2.79067 8.33333 1 7.438 1 6.33333M1 6.33333V3M9 3C9 1.89533 7.20933 1 5 1C2.79067 1 1 1.89533 1 3M9 3C9 4.10467 7.20933 5 5 5C2.79067 5 1 4.10467 1 3"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            const currentPath = window.location.pathname;
            const newPath = `${currentPath}?open=data-engineering`;
            Nav(newPath);
            scoll();
            handleClose();
          }}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "41px",
              height: "43px",
              padding: "3px 4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
              borderRadius: "10px",
              background:
                "linear-gradient(141deg, #FFD12B 0%, #DDB355 46.38%, #D78E28 94.59%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M16 14V4C16 1.832 12.337 0 8 0C3.663 0 0 1.832 0 4V14C0 16.168 3.663 18 8 18C12.337 18 16 16.168 16 14ZM8 2C11.691 2 13.931 3.507 14 3.994C13.931 4.493 11.691 6 8 6C4.309 6 2.069 4.493 2 4.006C2.069 3.507 4.309 2 8 2ZM2 6.607C3.479 7.454 5.637 8 8 8C10.363 8 12.521 7.454 14 6.607V8.994C13.931 9.493 11.691 11 8 11C4.309 11 2.069 9.493 2 9V6.607ZM2 14V11.607C3.479 12.454 5.637 13 8 13C10.363 13 12.521 12.454 14 11.607V13.994C13.931 14.493 11.691 16 8 16C4.309 16 2.069 14.493 2 14Z"
                fill="white"
              />
            </svg>
          </Box>
          <Typography
            sx={{
              color: "#125A79",
              textAlign: "center",
              fontFamily: "General Sans Variable",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.2px",
            }}
          >
            Data Engineering & Analytics
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            const currentPath = window.location.pathname;
            const newPath = `${currentPath}?open=application-development`;
            Nav(newPath);
            scoll();
            handleClose();
          }}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "41px",
              height: "43px",
              padding: "3px 4px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
              borderRadius: "10px",
              background:
                "linear-gradient(141deg, #FFD12B 0%, #DDB355 46.38%, #D78E28 94.59%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1378 2.505C8.07413 2.99527 6.2125 4.11166 4.80802 5.70121C3.40353 7.29076 2.52491 9.27571 2.29253 11.3841H7.08827C7.41501 8.22383 8.46129 5.18854 10.1378 2.505ZM14.8622 2.505C16.5449 5.19225 17.5882 8.22998 17.9117 11.3841H22.7075C22.4751 9.27571 21.5965 7.29076 20.192 5.70121C18.7875 4.11166 16.9259 2.99527 14.8622 2.505ZM15.6656 11.3841C15.3148 8.36403 14.2278 5.47631 12.5 2.97458C10.7722 5.47631 9.68521 8.36403 9.33438 11.3841H15.6656ZM9.33438 13.6159H15.6656C15.3148 16.636 14.2278 19.5237 12.5 22.0254C10.7722 19.5237 9.68521 16.636 9.33438 13.6159ZM7.08827 13.6159H2.29253C2.52491 15.7243 3.40353 17.7092 4.80802 19.2988C6.2125 20.8883 8.07413 22.0047 10.1378 22.495C8.45508 19.8077 7.41175 16.77 7.08827 13.6159ZM14.8622 22.495C16.5449 19.8077 17.5882 16.77 17.9117 13.6159H22.7075C22.4751 15.7243 21.5965 17.7092 20.192 19.2988C18.7875 20.8883 16.9259 22.0047 14.8622 22.495ZM12.5 25C14.1415 25 15.767 24.6767 17.2835 24.0485C18.8001 23.4203 20.1781 22.4996 21.3388 21.3388C22.4996 20.1781 23.4203 18.8001 24.0485 17.2835C24.6767 15.767 25 14.1415 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 -2.44606e-08 12.5 0C9.18479 4.94004e-08 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25Z"
                fill="white"
              />
            </svg>
          </Box>
          <Typography
            sx={{
              color: "#125A79",
              textAlign: "center",
              fontFamily: "General Sans Variable",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.2px",
            }}
          >
            Application Development
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
