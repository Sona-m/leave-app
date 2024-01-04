import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { Card, Button, Typography, Box } from "@mui/material";

const Calendar = () => {
  const currentDay = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDay);

  return (
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
              backgroundColor: "#3F51B5",
            },
          }}
        />
      </LocalizationProvider>
    </Card>
  );
};

export default Calendar;
