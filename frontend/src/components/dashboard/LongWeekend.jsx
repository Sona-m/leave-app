import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
  Stack,
  Grid,
} from "@mui/material";
import { EventAvailable as EventAvailableIcon } from "@mui/icons-material";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const LongWeekend = () => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} height={"100%"}>
      <Card className="long-weekend-card">
        <CardHeader
          title={
            <Typography variant="subtitle1" fontWeight={500} color={"#fff"}>
              Long Leave Reminder
            </Typography>
          }
          action={
            <Box
              sx={{
                position: "absolute",
                top: "15px",
                right: "12px",
              }}>
              <IconButton sx={{ color: "white" }} size="small">
                <EventAvailableIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography className="long-weekend-text">
              From: 26th Dec 2023
            </Typography>
            <Typography className="long-weekend-text">
              To: 3rd Jan 2024
            </Typography>
            <Typography variant="body1" textAlign={"justify"}>
              Just a reminder that the upcoming weekend is a long one. Make sure
              to plan your leaves accordingly.
            </Typography>
            <Typography
              variant="caption"
              color={"#7978e9"}
              textAlign={"justify"}>
              <strong>Reminder:</strong> Don't forget to update your leave
              status.
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign={"center"}
              fontWeight={500}
              color={"#47c746"}>
              Happy Holiday!
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LongWeekend;
