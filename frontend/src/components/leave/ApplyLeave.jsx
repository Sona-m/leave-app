import React from "react";
import {
  Autocomplete,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Input,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { KeyboardArrowDown } from "@mui/icons-material";

const ApplyLeave = () => {
  return (
    <Grid
      container
      item
      md={7}
      sm={12}
      xs={12}
      lg={7}
      p={1}
      className="apply-leave-card">
      <Grid item xs={12} md={6} p={1}>
        <FormControl fullWidth>
          <FormLabel>
            Leave Type<span className="mandatory">*</span>
          </FormLabel>
          <Autocomplete
            options={["Sick Leave", "Casual Leave", "Comp Off", "Others"]}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select leave type" />
            )}
            size="small"
            disableClearable
            popupIcon={<KeyboardArrowDown />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} p={1}>
        <FormLabel>Days Available</FormLabel>
        <Typography fontSize={"14px"} mt={1}>
          0
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} p={1}>
        <FormControl fullWidth>
          <FormLabel>
            From <span className="mandatory">*</span>
          </FormLabel>
          <TextField type="date" size="small" />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} p={1}>
        <FormControl fullWidth>
          <FormLabel>
            Until <span className="mandatory">*</span>
          </FormLabel>
          <TextField type="date" size="small" />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} p={1}>
        <FormControl fullWidth>
          <RadioGroup row>
            <FormControlLabel
              value="full"
              control={<Radio size="small" />}
              label="Full Day"
            />
            <FormControlLabel
              value="first half"
              control={<Radio size="small" />}
              label="First Half"
            />
            <FormControlLabel
              value="second half"
              control={<Radio size="small" />}
              label="Second Half"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} p={1}>
        <FormControl fullWidth>
          <TextField
            multiline
            rows={2}
            placeholder="Provide Reason for Leave"
            variant="outlined"
            size="small"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} p={1}>
        <FormControl fullWidth>
          <FormLabel>Attachment</FormLabel>
          <Button
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            sx={{ width: "100%" }}>
            Upload Attachment
            <Input type="file" sx={{ display: "none" }} />
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={12} p={1} display="flex" justifyContent="flex-end">
        <Stack direction="row" spacing={1}>
          <Button variant="contained">Apply</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ApplyLeave;
