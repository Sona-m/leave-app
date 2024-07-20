import React, { useState } from "react";
import { Tab, Box, Grid } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import PaySlip from "../components/finance/PaySlip";

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

const Payroll = () => {
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
            <StyledTab label="Pay Slip" value="1" />
            <StyledTab label="Form 16" value="2" />
            <StyledTab label="Claim" value={"3"} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PaySlip />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
};

export default Payroll;
