import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFoundPage404 from "./pages/404";
import InsertHours from "./pages/InsertHours";
import ShiftReport from "./pages/ShiftReport";
import ListAllUsers from "./pages/ListAllUsers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/User/InsertHours" element={<InsertHours />} />
        <Route path="/User/ShiftReport" element={<ShiftReport />} />
        <Route path="/Users" element={<ListAllUsers />} />
        <Route path="*" element={<NotFoundPage404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
