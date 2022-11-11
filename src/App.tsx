import React, { useState } from "react";
import "./index.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Job from "./pages/Job";
import Company from "./pages/Company";
import { createTheme, ThemeProvider } from "@mui/material";

type AuthValue = { userName: string; email: string } | null;

const theme = createTheme();
export const AuthContext = React.createContext<{
  value: AuthValue;
  setValue: (value: AuthValue) => void;
}>({
  value: null,
  setValue: () => {},
});
const App = () => {
  const [authContextValue, setAuthContextValue] = useState<AuthValue>(null);

  return (
    <AuthContext.Provider
      value={{ value: authContextValue, setValue: setAuthContextValue }}
    >
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
    </AuthContext.Provider>
  );
};
export default App;
