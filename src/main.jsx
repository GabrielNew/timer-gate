import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="*" />
      </Routes>
    </Router>
  </React.StrictMode>
);
