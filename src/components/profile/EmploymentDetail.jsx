import React from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  IconButton,
  TextField,
  Autocomplete,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { KeyboardArrowDown } from "@mui/icons-material";

const data = {
  employeeNumber: "123456",
  reportingTo: "Nihal Khan",
  department: "IT",
  workLocation: "Bangalore",
  yearOfService: "2",
  employmentType: "Full Time",
  bankName: "SBI",
  accountNumber: "123456789",
  bankBranch: "Bangalore",
  ifscCode: "SBI0001234",
  epfNo: "123456789",
  incomeTaxNo: "123456789",
  dateOfJoining: "2021-09-12",
  designation: "Software Engineer",
};

const EmploymentDetail = () => {
  return (
    <Grid
      container
      p={2}
      display={"flex"}
      justifyContent={"space-around"}
      pt={4}>
      <Grid
        item
        container
        className="apply-leave-card"
        md={6}
        lg={6}
        xs={12}
        sm={12}
        pl={3}
        pb={3}
        rowGap={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            className="profile-card-header"
            color={"#7da0fa"}
            mb={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            General
            <IconButton>
              <EditRoundedIcon
                sx={{ height: "16px", width: "16px", color: "#7da0fa" }}
              />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Employee Number</Typography>
          <TextField value={data.employeeNumber} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Designation</Typography>
          <Autocomplete
            popupIcon={<KeyboardArrowDown />}
            disableClearable
            options={[
              "Software Engineer",
              "Senior Software Engineer",
              "Team Lead",
              "Project Manager",
            ]}
            renderInput={(params) => <TextField {...params} />}
            value={data.designation}
            size="small"
            sx={{ width: "83%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Reporting To</Typography>
          <Autocomplete
            popupIcon={<KeyboardArrowDown />}
            disableClearable
            options={[
              "Nihal Khan",
              "Sandeep Kumar",
              "Mahesh Babu",
              "Shivangi Joshi",
            ]}
            renderInput={(params) => <TextField {...params} />}
            value={data.reportingTo}
            size="small"
            sx={{ width: "83%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Department</Typography>
          <TextField value={data.department} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Work Location</Typography>
          <TextField value={data.workLocation} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Date of Joining</Typography>
          <TextField
            value={data.dateOfJoining}
            size="small"
            type="date"
            sx={{ width: "83%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Year of Service</Typography>
          <TextField value={data.yearOfService} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Employement Type</Typography>
          <Autocomplete
            popupIcon={<KeyboardArrowDown />}
            disableClearable
            options={["Full Time", "Intern"]}
            renderInput={(params) => <TextField {...params} />}
            size="small"
            sx={{ width: "83%" }}
            value={data.employmentType}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        md={5}
        lg={5}
        xs={12}
        sm={12}
        bgcolor={"#98bdff"}
        borderRadius={"10px"}
        p={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            className="profile-card-header"
            mb={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            Bank Details
            <IconButton>
              <EditRoundedIcon
                sx={{ height: "16px", width: "16px", color: "#fff" }}
              />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Bank Name</Typography>
          <TextField variant="standard" value={data.bankName} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Account Number</Typography>
          <TextField variant="standard" value={data.accountNumber} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Bank Branch</Typography>
          <TextField variant="standard" value={data.bankBranch} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">IFSC Code</Typography>
          <TextField variant="standard" value={data.ifscCode} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">EPF No</Typography>
          <TextField variant="standard" value={data.epfNo} />
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
          <Typography className="profile-label">Income tax No</Typography>
          <TextField variant="standard" value={data.incomeTaxNo} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmploymentDetail;
