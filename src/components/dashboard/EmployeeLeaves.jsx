import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

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
    <Card className="dashboard-card" sx={{ height: "100%" }}>
      <CardHeader title={"Who's on Leave"} className="dashboard-card-header" />
      <CardContent className="dashboard-card-content">
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
        <Typography
          color={"primary"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={500}
          variant="body1"
          textAlign={"center"}>
          +3 More <KeyboardArrowDown />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeLeaves;
