import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Avatar,
  CardHeader,
  Stack,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const leaveData = {
  from: "Jan 12 Mon",
  to: "Jan 15 Thur",
  leaveType: "Sick Leave",
  managers: ["Nihal Khan", "Sandeep Kumar"],
  reason:
    "Going to attend a marriage function. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  duration: "4 Days",
  details: [
    { date: "Jan 12 Mon", shift: "2nd Half" },
    { date: "Jan 13 Tue", shift: "Full Day" },
    { date: "Jan 14 Wed", shift: "Holiday" },
    { date: "Jan 15 Thur", shift: "First Half" },
  ],
};

const DisplayLeave = () => {
  return (
    <Card elevation={3} className="display-leave-card" sx={{ maxWidth: 420 }}>
      <CardHeader
        title={<Typography fontSize={"18px"}>Leave Summary</Typography>}
        className="dashboard-card-header"
        avatar={
          <Avatar sx={{ backgroundColor: "#4b49ac" }}>
            <EventIcon />
          </Avatar>
        }
      />
      <CardContent>
        <Stack spacing={1} color="#2d3a4b">
          <Typography variant="body1" fontSize={"20px"} color="#2d3a4b" my={1}>
            {leaveData.from} &nbsp; ➔ &nbsp; {leaveData.to}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: "#333333" }}>Type:</strong>{" "}
            {leaveData.leaveType}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: "#333333" }}>Duration:</strong>{" "}
            {leaveData.duration}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: "#333333" }}>Managers:</strong>{" "}
            {leaveData.managers.map((manager, index) => (
              <span key={index}>
                {manager}
                {index < leaveData.managers.length - 1 && ", "}
              </span>
            ))}
          </Typography>
          <Typography variant="body1" mt={1} mb={2}>
            <strong style={{ color: "#333333" }}>Reason:</strong>{" "}
            {leaveData.reason}
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={1}>
          {leaveData.details.map((detail, index) => (
            <Grid item key={index} xs={6} sm={3}>
              <Chip
                label={formatDate(detail.date)}
                color="info"
                variant="outlined"
                sx={{
                  borderColor: "#4b49ac",
                  marginBottom: 1,
                  color: "#4b49ac",
                }}
              />
              {detail.shift && (
                <Typography variant="body1" color="#2d3a4b" mt={1}>
                  <strong style={{ color: "#333333" }}>Shift:</strong>{" "}
                  {detail.shift}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const formatDate = (dateString) => {
  const [month, day] = dateString.split(" ").slice(0, 2);
  return `${day} ${month}`;
};

export default DisplayLeave;
