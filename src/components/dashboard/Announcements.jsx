import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Stack,
  Typography,
  Grid,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "4 Sept 2023",
    time: "now",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "1 Jan 2024",
    time: "05:00 PM",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "26 Dec 2023",
    time: "09:25 AM",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "18 Aug 2020",
    time: "now",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "20 Mar 2021",
    time: "now",
  },
];

const Announcements = () => {
  const totalNotifications = notifications.length;

  return (
    <Card className="dashboard-card">
      <CardHeader
        title="Latest Announcements"
        className="dashboard-card-header"
        action={<Button className="detail-btn">View Details</Button>}
      />
      <CardContent className="dashboard-card-content">
        {notifications.map((row, index) => (
          <Stack
            key={index}
            direction={"row"}
            spacing={2}
            py={1}
            alignItems={"center"}
            borderBottom={
              index === totalNotifications - 1 ? "none" : "1px solid #E2E1E6"
            }>
            <Grid width={"20%"}>
              <Typography variant="body2" fontWeight={600}>
                {row.date}
              </Typography>
              <Typography variant="caption" color={"#AAAAAE"}>
                {row.time}
              </Typography>
            </Grid>
            <Grid width={"80%"}>
              <Typography variant="body1">{row.title}</Typography>
            </Grid>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};

export default Announcements;
