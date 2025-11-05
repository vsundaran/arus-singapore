import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
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
