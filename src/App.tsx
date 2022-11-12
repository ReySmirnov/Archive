import React from "react";
import "./index.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "./pages/Job";
import Company from "./pages/Company";
import { createTheme, ThemeProvider } from "@mui/material";
import AuthProvider from "./components/AuthProvider";

const theme = createTheme();

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Main />} />
              <Route path={"/:page"} element={<Main />} />
              <Route path={"/job/:id"} element={<Job />} />
              <Route path={"/company/:id"} element={<Company />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </ThemeProvider>
    </AuthProvider>
  );
};
export default App;
