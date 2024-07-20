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
    <Grid container p={2} display={"flex"} rowGap={2} pt={4} bgcolor="#f5f7ff">
      <LeaveCard />
      <Grid
        container
        height={"350px"}
        display={"flex"}
        pl={2}
        columnSpacing={2}>
        <Calendar />
        <Announcements />
        <EmployeeLeaves />
      </Grid>
      <Grid container columnSpacing={2} height={"350px"} pl={2}>
        <PendingRequests />
        <Holiday />
        <LongWeekend />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
