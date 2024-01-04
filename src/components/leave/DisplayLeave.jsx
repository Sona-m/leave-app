import React from "react";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EastIcon from "@mui/icons-material/East";
import {
  Grid,
  Typography,
  Box,
  Chip,
  Avatar,
  Paper,
  Button,
} from "@mui/material";

const leaveData = {
  from: "Jan 12 Mon",
  to: "Jan 18 Thur",
  type: "Sick Leave",
  managers: ["Nihal Khan", "Sandeep Kumar"],
  reason:
    "Going to attend a marriage function , lorem empsumm sisokckk mokuillla , jklllldddd Going to attend a marriage function , lorem empsumm sisokckk mokuillla , jklllldddd Going to attend a marriage function , lorem empsumm sisokckk mokuillla , jklllldddd",
  file: "leave.png",
  duration: "Full Day",
};

const chipStyle = {
  color: "#FFF",
  border: `1px solid #4b49ac`,
  borderRadius: "8px",
  padding: "6px",
  backgroundColor: "#25476a",
  fontSize: "14px",
  fontWeight: 500,
  width: "fit-content",
};

const DisplayLeave = () => {
  return (
    <Paper
      sx={{
        padding: 2,
        borderRadius: "10px",
        bgcolor: "#98bdff",
        maxWidth: "40%",
        minWidth: "40%",
      }}>
      <Typography
        textAlign={"center"}
        fontSize={"18px"}
        mb={3}
        color={"#FFF"}
        fontWeight={500}>
        Your Leave Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chip
            icon={<SentimentSatisfiedOutlinedIcon />}
            label={leaveData.type}
            color={"primary"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chip
            label={leaveData.duration}
            icon={<AccessTimeOutlinedIcon />}
            variant="contained"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chip
            label="Days"
            avatar={
              <Avatar sx={{ bgcolor: "#7978e9" }}>
                <Typography color={"#FFF"}>
                  {leaveData.to.split(" ")[1] -
                    leaveData.from.split(" ")[1] +
                    1}
                </Typography>
              </Avatar>
            }
            variant="contained"
            color="warning"
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        justifyContent={"center"}
        alignItems={"center"}
        mt={2}>
        <Box mr={2} display={"flex"} flexDirection={"column"}>
          <Typography
            className="date-display"
            component={"span"}
            height={"70px !important"}>
            {leaveData.from.split(" ")[1]}
            <Typography component={"span"}>
              {leaveData.from.split(" ")[0]}
            </Typography>
          </Typography>
          <Typography className="week">
            {leaveData.from.split(" ")[2]}
          </Typography>
        </Box>
        <EastIcon sx={{ width: "30px" }} />
        <Box ml={2} display={"flex"} flexDirection={"column"}>
          <Typography
            className="date-display"
            component={"span"}
            height={"70px!important"}>
            {leaveData.to.split(" ")[1]}
            <Typography component={"span"}>
              {leaveData.to.split(" ")[0]}
            </Typography>
          </Typography>
          <Typography className="week">{leaveData.to.split(" ")[2]}</Typography>
        </Box>
      </Grid>
      <Box bgcolor={"white"} borderRadius={"8px"} p={2} mt={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography mb={2} variant="body1" textAlign={"center"}>
            Your leave will be approved by
          </Typography>
          <Grid container>
            {leaveData.managers.map((manager, index) => (
              <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
                <Chip
                  variant="outlined"
                  label={manager}
                  sx={chipStyle}
                  key={index}
                  avatar={
                    <Avatar sx={{ bgcolor: "black", color: "#fff !important" }}>
                      {manager.charAt(0)}
                    </Avatar>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ overflowWrap: "break-word" }}>
          Reason: {leaveData.reason.slice(0, 90)}
          <Typography component={"span"}>...</Typography>
        </Typography>
      </Box>
    </Paper>
  );
};

export default DisplayLeave;
