import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardHeader,
  Chip,
  Avatar,
} from "@mui/material";
import LeaveChart from "./LeaveChart";

const leaveStatus = [
  {
    label: "CASUAL LEAVES",
    used: 4,
    total: 18,
    color: "#98BDFF",
  },
  {
    label: "SICK LEAVES",
    used: 5,
    total: 10,
    color: "#7978e9",
  },
  {
    label: "COMPOFFS",
    used: 0,
    total: 3,
    color: "#f3797e",
  },
];

const LeaveCard = () => {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      columnSpacing={2}
      pl={2}>
      {leaveStatus.map((leave) => (
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "150px",
              borderRadius: "10px",
              border: `2px solid ${leave.color}`,
            }}>
            <CardHeader
              title={<Typography variant="subtitle2">{leave.label}</Typography>}
            />
            <CardContent sx={{ height: "100px", p: 0 }}>
              <LeaveChart total={leave.total} used={leave.used} />
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Card
          sx={{
            height: "150px",
            border: "2px solid #4b49ac",
            borderRadius: "10px",
          }}>
          <CardHeader
            title={<Typography variant="subtitle2">WORK FROM HOME</Typography>}
          />
          <CardContent sx={{ height: "100px", p: 0 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}>
              <Chip
                label={"APPROVED"}
                variant="outlined"
                color={"success"}
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "success.main",
                      color: "white",
                    }}>
                    3
                  </Avatar>
                }
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LeaveCard;
