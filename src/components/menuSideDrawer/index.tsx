import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        borderRadius: "0 0 25px 25px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="myListBox"
    >
      <List
        sx={{
          paddingY: 0,
          borderRadius: "0 0 25px 25px",
          background: "linear-gradient(90deg, #22416B 27.41%, #4D709D 99.95%)",
        }}
      >
        {/* <ListItem 
        secondaryAction={<IconButton edge="end" aria-label="close" onClick={toggleDrawer(anchor, false)}><CloseIcon /></IconButton>}
        </ListItem> */}

        <ListItem sx={{ display: "flex", justifyContent: "end" }}>
          {/* Add your ListItem content here */}
          {/* <ListItemText primary="Your content" /> */}

          <IconButton
            edge="end"
            aria-label="close"
            onClick={toggleDrawer(anchor, false)}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </ListItem>
        {[
          {
            title: "Services",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 10 13"
                fill="none"
              >
                <path
                  d="M9 6.33333V9.66667C9 10.7713 7.20933 11.6667 5 11.6667C2.79067 11.6667 1 10.7713 1 9.66667V6.33333M9 6.33333V3M9 6.33333C9 7.438 7.20933 8.33333 5 8.33333C2.79067 8.33333 1 7.438 1 6.33333M1 6.33333V3M9 3C9 1.89533 7.20933 1 5 1C2.79067 1 1 1.89533 1 3M9 3C9 4.10467 7.20933 5 5 5C2.79067 5 1 4.10467 1 3"
                  stroke="url(#paint0_linear_2604_5708)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5708"
                    x1="5"
                    y1="1"
                    x2="5"
                    y2="11.6667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          {
            title: "About",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00064 1.33337C4.31877 1.33337 1.33398 4.31812 1.33398 8.00003C1.33398 11.6819 4.31877 14.6667 8.00064 14.6667C11.6826 14.6667 14.6673 11.6819 14.6673 8.00003C14.6673 4.31812 11.6826 1.33337 8.00064 1.33337ZM8.00064 13.3334C5.05986 13.3334 2.66733 10.9408 2.66733 8.00003C2.66733 5.05922 5.05983 2.66672 8.00064 2.66672C10.9415 2.66672 13.334 5.05922 13.334 8.00003C13.334 10.9408 10.9415 13.3334 8.00064 13.3334ZM8.83545 5.33337C8.83545 5.81675 8.48352 6.16672 8.00742 6.16672C7.51208 6.16672 7.16877 5.81672 7.16877 5.32412C7.16877 4.85069 7.52136 4.50006 8.00742 4.50006C8.48352 4.50006 8.83545 4.85069 8.83545 5.33337ZM7.33545 7.33337H8.66877V11.3334H7.33545V7.33337Z"
                  fill="url(#paint0_linear_2604_5709)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5709"
                    x1="8.00066"
                    y1="1.33337"
                    x2="8.00066"
                    y2="14.6667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          {
            title: "People",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.99993 5.5C1.99986 4.91988 2.14399 4.34883 2.41936 3.83822C2.69473 3.32762 3.0927 2.89347 3.57748 2.57482C4.06226 2.25617 4.61865 2.06302 5.19659 2.01274C5.77454 1.96246 6.35591 2.05663 6.88844 2.28678C7.42096 2.51692 7.88792 2.87583 8.24733 3.33121C8.60674 3.7866 8.84732 4.32418 8.94742 4.8956C9.04753 5.46703 9.00403 6.05437 8.82084 6.60482C8.63764 7.15526 8.3205 7.65153 7.89793 8.049C8.69464 8.4358 9.38637 9.00894 9.91451 9.71986C10.4427 10.4308 10.7917 11.2585 10.9319 12.133C10.9474 12.2303 10.9435 12.3297 10.9205 12.4255C10.8975 12.5213 10.8559 12.6117 10.798 12.6914C10.7401 12.7711 10.6671 12.8386 10.5831 12.8901C10.4991 12.9416 10.4057 12.9761 10.3084 12.9915C10.2111 13.0069 10.1117 13.003 10.0159 12.9801C9.92011 12.9571 9.82977 12.9155 9.75005 12.8576C9.67033 12.7997 9.6028 12.7266 9.5513 12.6426C9.49981 12.5586 9.46536 12.4653 9.44993 12.368C9.29994 11.4283 8.81986 10.5729 8.0959 9.9553C7.37193 9.33773 6.45152 8.99848 5.49993 8.99848C4.54834 8.99848 3.62793 9.33773 2.90396 9.9553C2.18 10.5729 1.69992 11.4283 1.54993 12.368C1.53443 12.4653 1.49992 12.5586 1.44837 12.6426C1.39681 12.7266 1.32922 12.7996 1.24946 12.8574C1.16969 12.9153 1.07931 12.9568 0.983481 12.9798C0.887649 13.0027 0.78824 13.0065 0.69093 12.991C0.593621 12.9755 0.500316 12.941 0.416344 12.8894C0.332372 12.8379 0.259377 12.7703 0.201526 12.6905C0.143675 12.6108 0.102101 12.5204 0.079179 12.4246C0.0562567 12.3287 0.0524344 12.2293 0.0679304 12.132C0.207703 11.2576 0.556525 10.4299 1.08475 9.71923C1.61297 9.00856 2.30497 8.43592 3.10193 8.05C2.75393 7.72268 2.47663 7.32757 2.28711 6.88902C2.09759 6.45047 1.99985 5.97776 1.99993 5.5ZM10.9999 4C11.5809 4.00041 12.1493 4.16947 12.6361 4.48665C13.1229 4.80384 13.5072 5.25552 13.7423 5.78685C13.9773 6.31819 14.0531 6.90634 13.9604 7.47991C13.8677 8.05347 13.6104 8.58779 13.2199 9.018C13.8289 9.31971 14.3701 9.7424 14.8102 10.2603C15.2504 10.7781 15.5803 11.3803 15.7799 12.03C15.8196 12.1561 15.8251 12.2904 15.7961 12.4193C15.767 12.5482 15.7044 12.6672 15.6145 12.7641C15.5246 12.8609 15.4107 12.9323 15.2844 12.971C15.158 13.0096 15.0236 13.0141 14.8949 12.984C14.7663 12.9542 14.6477 12.891 14.5513 12.8008C14.4549 12.7105 14.3841 12.5964 14.3459 12.47C14.1664 11.8904 13.8398 11.3671 13.3977 10.9514C12.9557 10.5357 12.4135 10.2417 11.8239 10.098C11.6602 10.0585 11.5145 9.96496 11.4104 9.83253C11.3062 9.7001 11.2497 9.53647 11.2499 9.368V9.016C11.2498 8.87637 11.2887 8.73949 11.3622 8.62076C11.4357 8.50204 11.5409 8.40619 11.6659 8.344C11.9691 8.19376 12.2126 7.94543 12.3568 7.63935C12.501 7.33327 12.5375 6.98743 12.4603 6.65799C12.3832 6.32855 12.1969 6.03487 11.9318 5.82465C11.6667 5.61443 11.3383 5.50002 10.9999 5.5C10.801 5.5 10.6103 5.42099 10.4696 5.28033C10.3289 5.13968 10.2499 4.94892 10.2499 4.75C10.2499 4.55109 10.3289 4.36033 10.4696 4.21967C10.6103 4.07902 10.801 4 10.9999 4ZM5.49993 3.5C5.23359 3.49398 4.96873 3.54123 4.72091 3.63898C4.47308 3.73672 4.24728 3.88299 4.05676 4.06921C3.86624 4.25542 3.71484 4.47782 3.61146 4.72335C3.50807 4.96888 3.45478 5.23259 3.45471 5.49899C3.45465 5.7654 3.50781 6.02914 3.61107 6.27472C3.71433 6.5203 3.86562 6.74277 4.05604 6.92908C4.24647 7.11539 4.4722 7.26177 4.71998 7.35964C4.96775 7.45751 5.23259 7.50489 5.49893 7.499C6.02149 7.48745 6.51877 7.27178 6.8843 6.89817C7.24984 6.52455 7.45458 6.02268 7.45471 5.49999C7.45485 4.9773 7.25035 4.47533 6.885 4.10154C6.51965 3.72774 6.02249 3.51182 5.49993 3.5Z"
                  fill="url(#paint0_linear_2604_5725)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5725"
                    x1="7.93651"
                    y1="1.99957"
                    x2="7.93651"
                    y2="13.0037"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          {
            title: "Organizations",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2 14H14M6 5.33333H6.66667M6 8H6.66667M6 10.6667H6.66667M9.33333 5.33333H10M9.33333 8H10M9.33333 10.6667H10M3.33333 14V3.33333C3.33333 2.97971 3.47381 2.64057 3.72386 2.39052C3.97391 2.14048 4.31304 2 4.66667 2H11.3333C11.687 2 12.0261 2.14048 12.2761 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14"
                  stroke="url(#paint0_linear_2604_5727)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5727"
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="14"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
          {
            title: "Testimonials",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2604_5739)">
                  <path
                    d="M6.10281 3.60534C6.94747 2.09068 7.36947 1.33334 8.00081 1.33334C8.63214 1.33334 9.05414 2.09068 9.89881 3.60534L10.1175 3.99734C10.3575 4.42801 10.4775 4.64334 10.6641 4.78534C10.8508 4.92734 11.0841 4.98001 11.5508 5.08534L11.9748 5.18134C13.6148 5.55268 14.4341 5.73801 14.6295 6.36534C14.8241 6.99201 14.2655 7.64601 13.1475 8.95334L12.8581 9.29134C12.5408 9.66268 12.3815 9.84868 12.3101 10.078C12.2388 10.308 12.2628 10.556 12.3108 11.0513L12.3548 11.5027C12.5235 13.2473 12.6081 14.1193 12.0975 14.5067C11.5868 14.894 10.8188 14.5407 9.28414 13.834L8.88614 13.6513C8.45014 13.45 8.23214 13.35 8.00081 13.35C7.76947 13.35 7.55147 13.45 7.11547 13.6513L6.71814 13.834C5.18281 14.5407 4.41481 14.894 3.90481 14.5073C3.39347 14.1193 3.47814 13.2473 3.64681 11.5027L3.69081 11.052C3.73881 10.556 3.76281 10.308 3.69081 10.0787C3.62014 9.84868 3.46081 9.66268 3.14347 9.29201L2.85414 8.95334C1.73614 7.64668 1.17747 6.99268 1.37214 6.36534C1.56681 5.73801 2.38747 5.55201 4.02747 5.18134L4.45147 5.08534C4.91747 4.98001 5.15014 4.92734 5.33747 4.78534C5.52481 4.64334 5.64414 4.42801 5.88414 3.99734L6.10281 3.60534Z"
                    stroke="url(#paint0_linear_2604_5739)"
                    stroke-width="1.5"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5739"
                    x1="8.00081"
                    y1="1.33334"
                    x2="8.00081"
                    y2="14.6666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                  <clipPath id="clip0_2604_5739">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
          {
            title: "Contact",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.6673 2.66666H3.33398C2.80355 2.66666 2.29484 2.87737 1.91977 3.25244C1.5447 3.62752 1.33398 4.13622 1.33398 4.66666V11.3333C1.33398 11.8638 1.5447 12.3725 1.91977 12.7475C2.29484 13.1226 2.80355 13.3333 3.33398 13.3333H12.6673C13.1978 13.3333 13.7065 13.1226 14.0815 12.7475C14.4566 12.3725 14.6673 11.8638 14.6673 11.3333V4.66666C14.6673 4.13622 14.4566 3.62752 14.0815 3.25244C13.7065 2.87737 13.1978 2.66666 12.6673 2.66666ZM12.2207 3.99999L8.00065 7.16666L3.78065 3.99999H12.2207ZM12.6673 12H3.33398C3.15717 12 2.9876 11.9298 2.86258 11.8047C2.73756 11.6797 2.66732 11.5101 2.66732 11.3333V4.83332L7.60065 8.53332C7.71605 8.61987 7.8564 8.66666 8.00065 8.66666C8.1449 8.66666 8.28525 8.61987 8.40065 8.53332L13.334 4.83332V11.3333C13.334 11.5101 13.2637 11.6797 13.1387 11.8047C13.0137 11.9298 12.8441 12 12.6673 12Z"
                  fill="url(#paint0_linear_2604_5741)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2604_5741"
                    x1="8.00065"
                    y1="2.66666"
                    x2="8.00065"
                    y2="13.3333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD12B" />
                    <stop offset="1" stop-color="#997D1A" />
                  </linearGradient>
                </defs>
              </svg>
            ),
          },
        ].map((text, Index) => (
          <ListItem
            key={text.title}
            disablePadding
            sx={{
              borderBottom: Index === 5 ? 0 : "0.5px solid #FFF",
              paddingY: "6px",
            }}
          >
            <ListItemButton
              sx={{ paddingX: 3, display: "flex", alignItems: "center" }}
              onClick={() => {
                const element = document.getElementById(
                  text.title === "Contact"
                    ? "aspire"
                    : text.title === "Organizations"
                    ? "organisations"
                    : text.title.toLowerCase()
                );
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <Box mr={1} mt={"4px"}>
                {text.icon}
              </Box>
              <ListItemText
                primary={text.title}
                sx={{
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0.2px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ borderRadius: "0 0 25px 25px" }}>
      {(["top"] as const).map((anchor) => (
        <Box key={anchor} sx={{ borderRadius: "0 0 25px 25px" }}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="29"
              viewBox="0 0 32 29"
              fill="none"
            >
              <path
                d="M29.1667 23.3333C29.8087 23.3337 30.426 23.581 30.8906 24.024C31.3553 24.4671 31.6317 25.0719 31.6625 25.7132C31.6934 26.3545 31.4763 26.9831 31.0564 27.4687C30.6364 27.9543 30.0457 28.2597 29.4067 28.3217L29.1667 28.3333H2.5C1.85797 28.333 1.24068 28.0857 0.776022 27.6427C0.311369 27.1996 0.03498 26.5948 0.00412623 25.9535C-0.0267275 25.3122 0.19032 24.6836 0.610292 24.198C1.03027 23.7124 1.62097 23.407 2.26 23.345L2.5 23.3333H29.1667ZM29.1667 11.6667C29.8297 11.6667 30.4656 11.9301 30.9344 12.3989C31.4033 12.8677 31.6667 13.5036 31.6667 14.1667C31.6667 14.8297 31.4033 15.4656 30.9344 15.9344C30.4656 16.4033 29.8297 16.6667 29.1667 16.6667H2.5C1.83696 16.6667 1.20107 16.4033 0.732233 15.9344C0.263392 15.4656 0 14.8297 0 14.1667C0 13.5036 0.263392 12.8677 0.732233 12.3989C1.20107 11.9301 1.83696 11.6667 2.5 11.6667H29.1667ZM29.1667 0C29.8297 0 30.4656 0.263392 30.9344 0.732233C31.4033 1.20107 31.6667 1.83696 31.6667 2.5C31.6667 3.16304 31.4033 3.79893 30.9344 4.26777C30.4656 4.73661 29.8297 5 29.1667 5H2.5C1.83696 5 1.20107 4.73661 0.732233 4.26777C0.263392 3.79893 0 3.16304 0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H29.1667Z"
                fill="white"
              />
            </svg>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="myDrawer"
            sx={{
              borderRadius: "0 0 25px 25px",
              overflow: "hidden",
              "& .MuiPaper-root": { borderRadius: "0 0 25px 25px" },
            }}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </div>
  );
}
