import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import Stack from "@mui/material/Stack";

const MonthYearPicker = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year", "month"]}
        label="Select Year and Month"
        minDate={new Date("2012-03-01")}
        maxDate={new Date("2023-06-01")}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            helperText={null}
            size="small"
            color="primary"
            fullWidth
            variant="standard"
          />
        )}
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: "40px",
            color: "darkblue",
            "&.Mui-focused": {
              borderColor: "darkblue",
            },
            "& .MuiSvgIcon-root": {
              color: "darkblue",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default MonthYearPicker;
