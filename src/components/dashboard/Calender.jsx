import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { Card, Grid } from "@mui/material";

const Calendar = () => {
  const currentDay = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDay);

  return (
    <Grid item xs={12} sm={12} md={3} lg={3} height={"100%"}>
      <Card className="dashboard-card">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={["year", "month", "day"]}
            value={selectedDate}
            sx={{
              margin: "0 !important",
              width: "auto !important",
              p: 2,
              border: "1px solid neutral2",
              color: "black",
              "& .MuiButtonBase-root.Mui-selected": {
                backgroundColor: "#4b49ac",
              },
              "& .MuiYearCalendar-root": {
                width: "100% !important",
              },
              "& .MuiMonthCalendar-root": {
                width: "100% !important",
                height: "290px",
                overflow: "scroll",
              },
              "& .MuiPickersCalendarHeader-root": {
                margin: "5px",
                padding: "0px",
                color: "#4b49ac !important",
                marginBottom: "15px",
                marginTop: "10px",
                svg: {
                  color: "#4b49ac !important",
                },
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "18px",
                color: "#4b49ac",
              },
            }}
          />
        </LocalizationProvider>
      </Card>
    </Grid>
  );
};

export default Calendar;
