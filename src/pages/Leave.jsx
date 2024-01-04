import React, { useState } from "react";
import { Tab, Box, Grid } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ApplyLeave from "../components/leave/ApplyLeave";
import DisplayLeave from "../components/leave/DisplayLeave";
import LeaveStatistics from "../components/leave/LeaveStatistics";
import LeaveStatus from "../components/leave/LeaveStatus";
import { styled } from "@mui/material/styles";

const StyledTab = styled(Tab)({
  color: "#7978e9",
  "&.Mui-selected": {
    backgroundColor: "#7978e9 !important",
    color: "#fff",
    borderBottom: "0px !important",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
});

const Leave = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderColor: "divider",
            bgcolor: "#fff",
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}>
          <TabList onChange={handleChange}>
            <StyledTab label="Apply Leave" value="1" />
            <StyledTab label="Leave Status" value="2" />
            <StyledTab label="Leave Statistics" value={"3"} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "12px" }}>
          <Grid
            container
            display={"flex"}
            height={"100%"}
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
