import React, { useState } from "react";
import { Tab, Box, Grid, Chip } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LeaveTable from "./LeaveTable";
import { styled } from "@mui/material/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const StyledTab = styled(Tab)({
  color: "#4b49ac",
  "&.Mui-selected": {
    backgroundColor: "#7978e9 !important",
    color: "#fff",
    borderBottom: "0px !important",
  },
});

const approvedRows = [
  {
    id: 1,
    from: "Jan 12 Mon",
    to: "Jan 18 Thur",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    approvedBy: ["John Doe", "Sandeep Kumar"],
  },
  {
    id: 2,
    from: "Mar 05 Wed",
    to: "Mar 17 Mon",
    type: "Casual Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    approvedBy: ["Nihal Khan"],
  },
  {
    id: 3,
    from: "Apr 03 Fri",
    to: "May 05 Tue",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    approvedBy: ["Nivetha"],
  },
];

const pendingRows = [
  {
    id: 1,
    from: "Nov 25 Sat",
    to: "Nov 30 Thur",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    status: [
      {
        status: "pending",
        label: "Nihal Khan",
      },
      {
        status: "approved",
        label: "Sourabh Pathak",
      },
    ],
  },
  {
    id: 2,
    from: "Feb 28 Wed",
    to: "Mar 05 Mon",
    type: "Casual Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    status: [
      {
        status: "pending",
        label: "Mahesh Babu",
      },
    ],
  },
];

const rejectedRows = [
  {
    id: 1,
    from: "Aud 18 Wed",
    to: "Aug 20 Fri",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    status: [
      {
        label: "Nihal Khan",
        status: "rejected",
      },
      {
        label: "Sourabh Pathak",
        status: "approved",
      },
    ],
  },
];

const approvedColumns = [
  { field: "from", headerName: "From", flex: 1 },
  { field: "to", headerName: "Until", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "appliedDate", headerName: "Applied Date", flex: 1 },
  { field: "approvedDate", headerName: "Approved Date", flex: 1 },
  { field: "approvedBy", headerName: "Approved By", minWidth: 200 },
];

const pendingColumns = [
  { field: "from", headerName: "From", flex: 1 },
  { field: "to", headerName: "Until", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "appliedDate", headerName: "Applied Date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    minWidth: 300,
    renderCell: (params) => (
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        {params?.value?.map((item) => (
          <StyledChip
            key={item.label}
            label={item.label}
            status={item.status}
          />
        ))}
      </Box>
    ),
  },
  {
    field: "actions",
    headerName: "Action",
    flex: 1,
    renderCell: () => (
      <Box pl={5}>
        <CancelOutlinedIcon />
      </Box>
    ),
  },
];

const rejectedColumns = [
  { field: "from", headerName: "From", flex: 1 },
  { field: "to", headerName: "Until", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "appliedDate", headerName: "Applied Date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    minWidth: 300,
    renderCell: (params) => (
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        {params?.value?.map((item) => (
          <StyledChip
            key={item.label}
            label={item.label}
            status={item.status}
          />
        ))}
      </Box>
    ),
  },
];

function StyledChip({ label, status }) {
  const colors = {
    rejected: {
      fontColor: "#E8415B",
      bgColor: "#f2d5d7",
      borderColor: "#e57f7f",
      icon: <CancelOutlinedIcon color="#E8415B" />,
    },
    approved: {
      fontColor: "#47C746",
      bgColor: "rgba(71, 199, 70, 0.10)",
      borderColor: "rgba(71, 199, 70, 0.50)",
      icon: <CheckCircleOutlineOutlinedIcon color="#47C746" />,
    },
    pending: {
      fontColor: "#FFC107",
      bgColor: "rgba(255, 193, 7, 0.10)",
      borderColor: "rgba(255, 193, 7, 0.50)",
      icon: <ErrorOutlineOutlinedIcon color="#FFC107" />,
    },
  };

  const chipStyle = {
    color: colors[status]?.fontColor,
    border: `1px solid ${colors[status]?.borderColor}`,
    borderRadius: "8px",
    padding: "0px",
    backgroundColor: colors[status]?.bgColor,
    fontSize: "14px",
    fontWeight: 500,
  };

  return (
    <Chip
      variant="outlined"
      label={label}
      sx={chipStyle}
      icon={colors[status]?.icon}
    />
  );
}

const LeaveStatus = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            bgcolor: "#7879e9",
            "& .MuiTabs-indicator": {
              backgroundColor: "#4b49ac",
            },
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-around",
            },
          }}>
          <TabList onChange={handleChange}>
            <StyledTab label="Approved Leaves" value="1" />
            <StyledTab label="Pending Leaves" value="2" />
            <StyledTab label="Rejected Leaves" value={"3"} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <LeaveTable
            row={approvedRows}
            columns={approvedColumns}
            color="#47C746"
            bgColor="rgba(71, 199, 70, 0.10)"
          />
        </TabPanel>
        <TabPanel value="2">
          <LeaveTable
            row={pendingRows}
            columns={pendingColumns}
            color="#FFC107"
            bgColor="rgba(255, 193, 16, 0.10)"
          />
        </TabPanel>
        <TabPanel value="3">
          <LeaveTable
            row={rejectedRows}
            columns={rejectedColumns}
            color="#E8415B"
            bgColor="rgba(232, 65, 91, 0.10)"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LeaveStatus;
