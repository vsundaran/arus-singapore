import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// Import PaginationItem
import PaginationItem from "@mui/material/PaginationItem";
import { Button } from "@mui/material";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  "& .MuiPaginationItem-root": {
    border: "1px solid #E3A44D",
    borderRadius: "8px",
    color: "#E3A44D",
    fontFamily: "General Sans Variable, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    maxWidth: "fit-content",
    width: "fit-content",
    height: "36px",
    margin: "0 4px",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#E3A44D",
    color: "#fff",
    border: "1px solid #E3A44D",
  },
  "& .MuiPaginationItem-root:hover": {
    backgroundColor: "rgba(227, 164, 77, 0.1)",
  },
  "& .MuiPaginationItem-previousNext": {
    padding: "0 0px",
  },
}));

export default function StyledPagination() {
  return (
    <Stack spacing={2} alignItems="center">
      <CustomPagination
        count={4}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: PreviousButton, next: NextButton }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

// Custom Previous button component
const PreviousButton = ({ ...props }) => (
  <Button
    {...props}
    style={{
      textTransform: "none",
      color: "#E3A44D",
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontWeight: 400,
      minWidth: "auto",
      height: "36px",
      margin: "0 4px",
      padding: "0 0px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    sx={{ px: { md: "20px !important", xs: 0 } }}
  >
    Previous
  </Button>
);

// Custom Next button component
const NextButton = ({ ...props }) => (
  <Button
    {...props}
    style={{
      textTransform: "none",
      color: "#E3A44D",
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontWeight: 400,
      minWidth: "auto",
      height: "36px",
      margin: "0 4px",
      padding: "0 0px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    sx={{ px: { md: "20px !important", xs: 0 } }}
  >
    Next
  </Button>
);
