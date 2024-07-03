import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Stack,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const notifications = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit hiii emm jo.",
    date: "4 Sept 2023",
    time: "now",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit sskjccc jdskskaka dddjhjkj dhddhhh",
    date: "1 Jan 2024",
    time: "05:00 PM",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit gg.",
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
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "20 Mar 2021",
    time: "now",
  },
];

const Announcements = () => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} height={"100%"}>
      <Card className="dashboard-card">
        <CardHeader
          title="Latest Announcements"
          className="dashboard-card-header"
        />
        <CardContent className="dashboard-card-content virtual-scroller">
          {notifications.map((row, index) => (
            <Stack
              key={index}
              direction={"row"}
              spacing={2}
              py={1}
              alignItems={"flex-start"}
              borderBottom={
                index === notifications.length - 1
                  ? "none"
                  : "1px solid #E5E5E5"
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
                <Typography variant="body1" textAlign={"justify"}>
                  {row.title}
                </Typography>
              </Grid>
            </Stack>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Announcements;
