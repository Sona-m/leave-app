import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { EventAvailable as EventAvailableIcon } from "@mui/icons-material";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const LongWeekend = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#98bdff",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        position: "relative",
      }}>
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
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight={500} mb={1}>
            Long Leave Reminder
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            py={2}>
            <AccessAlarmOutlinedIcon
              sx={{
                width: "100px",
                height: "100px",
                color: "#f3797e",
              }}
            />
          </Box>
          <Typography
            fontSize={"20px"}
            fontWeight={600}
            className="long-weekend-text">
            From: 26th Dec 2023
          </Typography>
          <Typography
            fontSize={"20px"}
            fontWeight={600}
            className="long-weekend-text">
            To: 3rd Jan 2024
          </Typography>
          <Typography variant="body1">
            Just a reminder that the upcoming weekend is a long one. Make sure
            to plan your leaves accordingly.
          </Typography>
          <Typography variant="caption" color={"#7978e9"}>
            <strong>Reminder:</strong> Don't forget to update your leave status.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LongWeekend;
