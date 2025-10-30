import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Container maxWidth="xl"> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;
