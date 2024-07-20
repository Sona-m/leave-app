import React, { useState } from "react";
import { Tab, Box, Grid, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ApplyLeave from "../components/leave/ApplyLeave";
import DisplayLeave from "../components/leave/DisplayLeave";
import LeaveStatistics from "../components/leave/LeaveStatistics";
import LeaveStatus from "../components/leave/LeaveStatus";
import { styled } from "@mui/material/styles";

const StyledTab = styled(Tab)({
  color: "#898989",
  "&.Mui-selected": {
    color: "#4b49ac",
  },
});

const Leave = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      height={"calc(100vh - 200px)"}
      sx={{
        "& .MuiTabs-flexContainer": {
          justifyContent: "space-around",
          display: "flex",
          height: "30px",
          marginBottom: "4px",
          alignItems: "center",
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "#4b49ac",
          top: "30px",
        },
      }}>
      <TabContext value={value}>
        <Box borderColor={"divider"} bgcolor={"#fff"}>
          <TabList onChange={handleChange}>
            <StyledTab
              label={<Typography variant="body1">APPLY LEAVE</Typography>}
              value="1"
            />
            <StyledTab
              label={<Typography variant="body1">LEAVE STATUS</Typography>}
              value="2"
            />
            <StyledTab
              label={<Typography variant="body1">LEAVE STASTISTICS</Typography>}
              value={"3"}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 2 }}>
          <Grid
            container
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}>
            <ApplyLeave />
            <DisplayLeave />
          </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <LeaveStatus />
        </TabPanel>
        <TabPanel value="3">
          <LeaveStatistics />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Leave;
