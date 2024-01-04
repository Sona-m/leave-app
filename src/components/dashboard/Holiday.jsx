import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Stack,
  Grid,
  Avatar,
  Typography,
} from "@mui/material";

const comingLeaves = [
  {
    id: 1,
    title: "Christmas Celebration",
    date: "December 25 , 2023",
    image:
      "https://cdn.pixabay.com/photo/2017/11/09/10/39/christmas-2933008_1280.jpg",
  },
  {
    id: 2,
    title: "Holi",
    date: "March 5 , 2024",
    image:
      "https://cdn.pixabay.com/photo/2014/03/28/21/39/holi-300343_1280.jpg",
  },
  {
    id: 3,
    title: "Gandhi Jayanti",
    date: "October 2 ,2024",
    image:
      "https://media.istockphoto.com/id/853476014/photo/money-growth-graph.jpg?s=1024x1024&w=is&k=20&c=EhvEHy1FkrlsKUpTmBPXI1RojYYdVrktazHUkRplSIc=",
  },
  {
    id: 4,
    title: "New Year",
    date: "January 1 , 2024",
    image:
      "https://cdn.pixabay.com/photo/2023/12/05/15/10/new-years-day-8431886_1280.jpg",
  },
  {
    id: 5,
    title: "Diwali",
    date: "November 4, 2024",
    image:
      "https://cdn.pixabay.com/photo/2019/10/12/06/56/hand-4543318_1280.jpg",
  },
];

const Holiday = () => {
  const totalHolidays = comingLeaves.length;

  return (
    <Card className="dashboard-card" sx={{ height: "400px !important" }}>
      <CardHeader
        title="Holiday's"
        className="dashboard-card-header"
        action={<Button className="detail-btn">View Details</Button>}
      />
      <CardContent className="dashboard-card-content">
        {comingLeaves.map((leave, index) => (
          <Stack
            key={leave.id}
            direction={"row"}
            spacing={2}
            py={1}
            alignItems={"center"}
            borderBottom={
              index === totalHolidays - 1 ? "none" : "1px solid #E2E1E6"
            }>
            <Grid>
              <Avatar src={leave.image} variant="rounded" />
            </Grid>
            <Grid>
              <Typography variant="subtitle2">{leave.title}</Typography>
              <Typography variant="caption" color={"#AAAAAE"}>
                {leave.date}
              </Typography>
            </Grid>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};

export default Holiday;
