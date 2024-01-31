import { Box } from "@mui/material";
import React from "react";
import "./Style.css";

import MyNavbar from "./Components/Navbar/MyNavbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Journey from "./Pages/Journey/Journey";
import About from "./Pages/About/About";

function App() {
  return (
    <Box
      className="NoScrollBar"
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#3c3c3c",
      }}
    >
      <MyNavbar />
      {/* router */}
      <Home />
      <Projects/>
      <Journey/>
      <About/>
    </Box>
  );
}

export default App;
