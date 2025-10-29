import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Services",
          "About",
          "People",
          "Organizations",
          "Testimonials",
          "Contact",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ paddingX: 3 }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
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
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
