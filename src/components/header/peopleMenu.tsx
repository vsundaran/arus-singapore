import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { IconButton } from "@mui/material";
import NavLinkChip from "../../atomic-elements/navLinkChip";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PeopleMenu() {
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
    const element = document.getElementById("people");
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
          label="People"
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
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
            >
              <path
                d="M1.94134 3.50043C1.94127 2.9203 2.0854 2.34926 2.36077 1.83865C2.63614 1.32804 3.03411 0.893892 3.51889 0.575245C4.00367 0.256598 4.56005 0.0634493 5.138 0.0131706C5.71594 -0.0371081 6.29732 0.0570604 6.82984 0.287206C7.36237 0.517352 7.82933 0.876257 8.18874 1.33164C8.54815 1.78702 8.78872 2.3246 8.88883 2.89603C8.98894 3.46745 8.94544 4.0548 8.76225 4.60524C8.57905 5.15569 8.26191 5.65196 7.83934 6.04943C8.63604 6.43623 9.32778 7.00937 9.85592 7.72029C10.3841 8.43122 10.7331 9.25898 10.8733 10.1334C10.8888 10.2307 10.8849 10.3301 10.8619 10.4259C10.8389 10.5218 10.7973 10.6121 10.7394 10.6918C10.6815 10.7715 10.6085 10.8391 10.5245 10.8906C10.4405 10.9421 10.3471 10.9765 10.2498 10.9919C10.1525 11.0074 10.0531 11.0035 9.95732 10.9805C9.86152 10.9575 9.77118 10.9159 9.69146 10.858C9.61174 10.8001 9.5442 10.7271 9.49271 10.6431C9.44121 10.5591 9.40677 10.4657 9.39134 10.3684C9.24135 9.42874 8.76127 8.5733 8.0373 7.95573C7.31334 7.33815 6.39292 6.99891 5.44134 6.99891C4.48975 6.99891 3.56933 7.33815 2.84537 7.95573C2.12141 8.5733 1.64132 9.42874 1.49134 10.3684C1.47584 10.4657 1.44133 10.559 1.38977 10.643C1.33822 10.727 1.27063 10.8 1.19086 10.8578C1.1111 10.9157 1.02072 10.9573 0.924887 10.9802C0.829055 11.0031 0.729646 11.0069 0.632337 10.9914C0.535027 10.9759 0.441723 10.9414 0.35775 10.8899C0.273778 10.8383 0.200783 10.7707 0.142932 10.691C0.085081 10.6112 0.0435075 10.5208 0.0205852 10.425C-0.00233709 10.3292 -0.00615938 10.2297 0.0093366 10.1324C0.149109 9.25805 0.497931 8.43034 1.02615 7.71966C1.55437 7.00898 2.24637 6.43635 3.04334 6.05043C2.69534 5.7231 2.41804 5.328 2.22851 4.88944C2.03899 4.45089 1.94126 3.97818 1.94134 3.50043ZM10.9413 2.00043C11.5223 2.00084 12.0908 2.16989 12.5775 2.48708C13.0643 2.80427 13.4486 3.25594 13.6837 3.78728C13.9187 4.31862 13.9945 4.90677 13.9018 5.48033C13.8091 6.0539 13.5518 6.58822 13.1613 7.01843C13.7704 7.32013 14.3115 7.74283 14.7516 8.2607C15.1918 8.77857 15.5217 9.38075 15.7213 10.0304C15.761 10.1565 15.7666 10.2908 15.7375 10.4197C15.7085 10.5487 15.6458 10.6676 15.5559 10.7645C15.4661 10.8614 15.3521 10.9328 15.2258 10.9714C15.0994 11.01 14.965 11.0145 14.8363 10.9844C14.7077 10.9547 14.5892 10.8915 14.4928 10.8012C14.3964 10.711 14.3255 10.5969 14.2873 10.4704C14.1079 9.89078 13.7812 9.36757 13.3391 8.95184C12.8971 8.53612 12.3549 8.24208 11.7653 8.09843C11.6016 8.0589 11.4559 7.96538 11.3518 7.83295C11.2476 7.70053 11.1911 7.5369 11.1913 7.36843V7.01643C11.1912 6.8768 11.2301 6.73991 11.3036 6.62119C11.3771 6.50246 11.4823 6.40661 11.6073 6.34443C11.9105 6.19419 12.154 5.94586 12.2982 5.63978C12.4424 5.3337 12.4789 4.98786 12.4017 4.65842C12.3246 4.32898 12.1383 4.0353 11.8732 3.82508C11.6081 3.61486 11.2797 3.50045 10.9413 3.50043C10.7424 3.50043 10.5517 3.42141 10.411 3.28076C10.2704 3.14011 10.1913 2.94934 10.1913 2.75043C10.1913 2.55152 10.2704 2.36075 10.411 2.2201C10.5517 2.07945 10.7424 2.00043 10.9413 2.00043ZM5.44134 1.50043C5.175 1.49441 4.91014 1.54166 4.66231 1.6394C4.41448 1.73715 4.18868 1.88342 3.99816 2.06963C3.80764 2.25585 3.65625 2.47825 3.55286 2.72378C3.44948 2.9693 3.39619 3.23301 3.39612 3.49942C3.39605 3.76583 3.44921 4.02956 3.55247 4.27514C3.65574 4.52072 3.80702 4.7432 3.99745 4.92951C4.18787 5.11581 4.4136 5.2622 4.66138 5.36007C4.90916 5.45794 5.174 5.50532 5.44034 5.49943C5.9629 5.48788 6.46017 5.27221 6.82571 4.89859C7.19124 4.52498 7.39599 4.02311 7.39612 3.50042C7.39625 2.97773 7.19175 2.47576 6.82641 2.10196C6.46106 1.72817 5.96389 1.51225 5.44134 1.50043Z"
                fill="white"
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
            const newPath = `${currentPath}?open=leaders`;
            Nav(newPath);
            scoll();
            handleClose();
          }}
        >
          Leaders
        </MenuItem>
        <MenuItem
          onClick={() => {
            const currentPath = window.location.pathname;
            const newPath = `${currentPath}?open=advisers`;
            Nav(newPath);
            scoll();
            handleClose();
          }}
        >
          Advisers
        </MenuItem>
        <MenuItem
          onClick={() => {
            const currentPath = window.location.pathname;
            const newPath = `${currentPath}?open=innovators`;
            Nav(newPath);
            scoll();
            handleClose();
          }}
        >
          Innovators
        </MenuItem>
      </Menu>
    </div>
  );
}
