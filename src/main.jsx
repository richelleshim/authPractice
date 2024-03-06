import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssVarsProvider } from "@mui/joy";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
