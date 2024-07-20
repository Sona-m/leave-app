import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Stack,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const employee = [
  {
    id: 1,
    name: "Sandeep Kumar",
    designation: "Technical Engineer",
  },
  {
    id: 2,
    name: "Nihal Khan",
    designation: "Sr. Software Engineer",
  },
  {
    id: 3,
    name: "Sonam Kumari",
    designation: "Software Engineer",
  },
  {
    id: 4,
    name: "Mahesh Babu",
    designation: "Product Manager",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    designation: "Technical Engineer",
  },
  {
    id: 6,
    name: "Nihal Khan",
    designation: "Sr. Software Engineer",
  },
  {
    id: 7,
    name: "Sonam Kumari",
    designation: "Software Engineer",
  },
  {
    id: 8,
    name: "Mahesh Babu",
    designation: "Product Manager",
  },
  {
    id: 9,
    name: "Rajesh Kumar",
    designation: "Technical Engineer",
  },
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const EmployeeLeaves = () => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} height={"100%"}>
      <Card className="dashboard-card">
        <CardHeader title={"On Leave"} className="dashboard-card-header" />
        <CardContent className="dashboard-card-content virtual-scroller">
          {employee.map((row) => (
            <Stack key={row.id} direction={"row"} spacing={2} p={1}>
              <Avatar sx={{ bgcolor: getRandomColor() }}>
                <Typography fontSize={"14px"}>
                  {row.name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .join("")}
                </Typography>
              </Avatar>
              <Stack>
                <Typography variant={"subtitle2"}>{row.name}</Typography>
                <Typography variant={"caption"} color={"#AAAAAE"}>
                  {row.designation}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EmployeeLeaves;
