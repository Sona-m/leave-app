import "../src/styles/global.scss";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./services/routes/Routes";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { myThemes } from "./assets/themes/myThemes";
import SideBar from "./components/dashboard/SideBar";

const App = () => {
  return (
    <ThemeProvider theme={myThemes}>
      <BrowserRouter>
        <SideBar>
          <Box>
            <AppRoutes />
          </Box>
        </SideBar>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
