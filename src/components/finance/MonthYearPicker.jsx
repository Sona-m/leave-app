import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DatePicker from "@mui/lab/DatePicker";
import { Stack, Card } from "@mui/material";

const MonthYearPicker = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Card>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year", "month"]}
          label="Year and Month"
          minDate={new Date("2012-03-01")}
          maxDate={new Date("2023-06-01")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </Card>
  );
};

export default MonthYearPicker;
