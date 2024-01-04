import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PdfIcon from "../../assets/images/AdobeIcon.svg";
import MonthYearPicker from "./MonthYearPicker";

const data = [
  {
    title: "January",
    pdf: "Jan.pdf",
  },
  {
    title: "February",
    pdf: "Feb.pdf",
  },
  {
    title: "March",
    pdf: "Mar.pdf",
  },
  {
    title: "April",
    pdf: "Apr.pdf",
  },
  {
    title: "May",
    pdf: "May.pdf",
  },
  {
    title: "June",
    pdf: "June.pdf",
  },
  {
    title: "July",
    pdf: "July.pdf",
  },
  {
    title: "August",
    pdf: "Aug.pdf",
  },
  {
    title: "September",
    pdf: "Sept.pdf",
  },
  {
    title: "October",
    pdf: "Oct.pdf",
  },
  {
    title: "November",
    pdf: "Nov.pdf",
  },
  {
    title: "December",
    pdf: "Dec.pdf",
  },
];

const PaySlip = () => {
  return (
    <Grid container spacing={2}>
      <MonthYearPicker />
      {/* {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
          <Card
            sx={{
              borderTopLeftRadius: "35px",
              borderTopRightRadius: "35px",
            }}>
            <img src={PdfIcon} />
            <Stack
              direction="row"
              alignItems={"center"}
              px={2}
              pb={2}
              height={"25px"}>
              <Typography fontSize={"14px"} color="#AAAAAE">
                {item.pdf}
              </Typography>
              <IconButton>
                <FileDownloadIcon />
              </IconButton>
            </Stack>
          </Card>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default PaySlip;
