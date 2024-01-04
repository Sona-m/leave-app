import React from "react";
import LeaveCard from "../components/dashboard/LeaveCard";
import { Grid } from "@mui/material";
import Announcements from "../components/dashboard/Announcements";
import Holiday from "../components/dashboard/Holiday";
import PendingRequests from "../components/dashboard/PendingRequests";
import Calendar from "../components/dashboard/Calender";
import EmployeeLeaves from "../components/dashboard/EmployeeLeaves";
import LongWeekend from "../components/dashboard/LongWeekend";

const Dashboard = () => {
  return (
    <Grid container p={2} display={"flex"} spacing={2} pt={4} bgcolor="#f5f7ff">
      <LeaveCard />
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Calendar />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Announcements />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <EmployeeLeaves />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <PendingRequests />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Holiday />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <LongWeekend />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
