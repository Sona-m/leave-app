import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Grid, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import LeaveTable from "./LeaveTable";

const approvedLeaves = [
  {
    id: 1,
    title: "Sick Leave",
    startDate: "2021-09-01",
    endDate: "2021-09-03",
    appliedDate: "2012-08-25",
    status: "Approved",
    approveBy: ["Nihal Khan , Sourabh Kumar"],
    approveDate: ["2012-08-25", "2012-08-25"],
  },
  {
    id: 2,
    title: "Sick Leave",
    startDate: "2021-09-10",
    endDate: "2021-09-12",
    appliedDate: "2012-08-25",
    status: "Approved",
    approveBy: ["Nihal Khan , Sourabh Kumar"],
    approveDate: ["2012-08-25", "2012-08-25"],
  },
];

const pendingLeaves = [
  {
    id: 3,
    title: "Sick Leave",
    startDate: "2021-09-01",
    endDate: "2021-09-03",
    appliedDate: "2012-08-26",
    status: "Pending",
    appliedTo: ["Sourabh Pathak", "Sandeep Kumar"],
  },
  {
    id: 4,
    title: "Sick Leave",
    startDate: "2021-09-10",
    endDate: "2021-09-12",
    appliedDate: "2012-08-26",
    status: "Pending",
    appliedTo: ["Sourabh Pathak", "Sandeep Kumar"],
  },
];

const rejectedLeaves = [
  {
    id: 5,
    title: "Sick Leave",
    startDate: "2021-09-01",
    endDate: "2021-09-03",
    appliedDate: "2012-08-27",
    status: "Rejected",
    rejectedBy: ["Nihal Khan"],
    rejectedDate: "2012-08-27",
  },
  {
    id: 6,
    title: "Sick Leave",
    startDate: "2021-09-10",
    endDate: "2021-09-12",
    appliedDate: "2012-08-27",
    status: "Rejected",
    rejectedBy: ["Nihal Khan"],
    rejectedDate: "2012-08-27",
  },
];

const approvedColumns = [
  {
    field: "title",
    headerName: "Title",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "appliedDate",
    headerName: "Applied Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "approveBy",
    headerName: "Approved By",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "approveDate",
    headerName: "Approved Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

const pendingColumns = [
  {
    field: "title",
    headerName: "Title",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "appliedDate",
    headerName: "Applied Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "appliedTo",
    headerName: "Applied To",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "actions",
    headerName: "actions",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

const rejectedColumns = [
  {
    field: "title",
    headerName: "Title",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "appliedDate",
    headerName: "Applied Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "rejectedBy",
    headerName: "Rejected By",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "rejectedDate",
    headerName: "Rejected Date",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

const LeaveStatusPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={11} height={"calc(100vh - 100px)"}>
        {value === "1" && (
          <LeaveTable
            row={approvedLeaves}
            columns={approvedColumns}
            color={"#4CAF50"}
            bgColor={"#E9F7EC"}
          />
        )}
        {value === "2" && (
          <LeaveTable
            row={pendingLeaves}
            columns={pendingColumns}
            color={"#FFC107"}
            bgColor={"#FFF9C4"}
          />
        )}
        {value === "3" && (
          <LeaveTable
            row={rejectedLeaves}
            columns={rejectedColumns}
            color={"#F44336"}
            bgColor={"#FFEBEE"}
          />
        )}
      </Grid>
      <Grid item xs={12} md={1} p={0} zIndex={2} height={"calc(100vh - 100px)"}>
        <Paper
          elevation={0}
          sx={{
            height: "100%",
            borderRadius: "0px !important",
            "& .MuiTabs-flexContainer": {
              height: "400px",
            },
            "& .MuiTabs-indicator": {
              left: 0,
              backgroundColor: "black",
            },
          }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{ minHeight: "100%" }}>
            <Tab icon={<CheckBoxIcon />} value="1" />
            <Tab icon={<HourglassTopIcon />} value="2" />
            <Tab icon={<CancelPresentationIcon />} value="3" />
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LeaveStatusPage;
