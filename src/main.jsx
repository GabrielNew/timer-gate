import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateAccount />
  </React.StrictMode>
);
