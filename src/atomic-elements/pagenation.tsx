import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// Import PaginationItem
import PaginationItem from "@mui/material/PaginationItem";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPagination-ul": {
    justifyContent: "center",
  },
  "& .MuiPaginationItem-root": {
    border: "1px solid #E3A44D",
    borderRadius: "8px",
    color: "#E3A44D",
    fontFamily: "General Sans Variable, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    minWidth: "36px",
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
    padding: "0 14px",
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
  <button
    {...props}
    style={{
      // border: "1px solid #E3A44D",
      // borderRadius: "8px",
      color: "#E3A44D",
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontWeight: 400,
      minWidth: "auto",
      height: "36px",
      margin: "0 4px",
      padding: "0 14px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Previous
  </button>
);

// Custom Next button component
const NextButton = ({ ...props }) => (
  <button
    {...props}
    style={{
      color: "#E3A44D",
      outline: "none",
      border: "none",
      fontSize: "14px",
      fontWeight: 400,
      minWidth: "auto",
      height: "36px",
      margin: "0 4px",
      padding: "0 14px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Next
  </button>
);
