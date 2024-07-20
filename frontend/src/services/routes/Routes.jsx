import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Leave from "../../pages/Leave";
import Payroll from "../../pages/Payroll";
import Profile from "../../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
