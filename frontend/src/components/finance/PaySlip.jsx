import { KeyboardArrowDown } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Autocomplete,
  Button,
  Grid,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import paySlip from "../../assets/pdf/jan_payslip.pdf";
import PdfViewer from "../component_utils/PdfViewer";
import MonthYearPicker from "./MonthYearPicker";

const form16 = [
  {
    id: 1,
    name: "2024",
    items: ["Form 16 A", "Form 16 B"],
  },
  {
    id: 2,
    name: "2023",
    items: ["Form 16 A", "Form 16 B"],
  },
  {
    id: 3,
    name: "2022",
    items: ["Form 16 A", "Form 16 B"],
  },
];

const PaySlip = () => {
  const [issueDescription, setIssueDescription] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAttachedFile(file);
  };

  const handleSubmit = () => {
    console.log("Issue Description:", issueDescription);
    console.log("Attached File:", attachedFile);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Stack direction={"row"} spacing={3} alignItems="center">
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              border: "2px solid #98BDFF",
              padding: "16px",
              width: "60%",
            }}>
            <Typography variant="subtitle2" mb={2}>
              Download Pay Slip
            </Typography>
            <MonthYearPicker />
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              border: "2px solid #7978e9",
              padding: "16px",
              width: "60%",
            }}>
            <Typography variant="subtitle2" mb={2}>
              Download Form 16
            </Typography>
            <Autocomplete
              options={form16}
              groupBy={(option) => option.name}
              popupIcon={<KeyboardArrowDown />}
              disableClearable
              getOptionLabel={(option) => option.items}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Form 16"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </Paper>
        </Stack>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            width: "100%",
            mt: 2,
          }}>
          <Typography variant="subtitle2" mb={2}>
            Report an Issue
          </Typography>
          <TextField
            label="Issue Description"
            multiline
            rows={3}
            fullWidth
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
          />
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
            mt={2}>
            <Button variant="outlined" startIcon={<AttachFileIcon />}>
              <Input
                sx={{ display: "none" }}
                type="file"
                onChange={handleFileChange}
              />
              Attach File
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} height={"420px"}>
        <PdfViewer file={paySlip} />
      </Grid>
    </Grid>
  );
};

export default PaySlip;
