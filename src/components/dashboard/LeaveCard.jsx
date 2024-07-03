import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardHeader,
  Chip,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import LeaveChart from "./LeaveChart";
import { BootstrapTooltip } from "../component_utils/ComponentUtils";

const leaveStatus = [
  {
    label: "CASUAL LEAVES",
    used: 4,
    total: 18,
    color: "#98BDFF",
  },
  {
    label: "SICK LEAVES",
    used: 5,
    total: 10,
    color: "#17a2bb",
  },
  {
    label: "COMPOFFS",
    used: 0,
    total: 3,
    color: "#4b49ac",
  },
];

const birthData = [
  {
    id: 1,
    name: "Shreya",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55pAiPEgwqlhdiKj0RPXvkD5enC8C6ktHLg&usqp=CAU",
  },
  {
    id: 2,
    name: "Sourabh",
    link: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
  {
    id: 3,
    name: "Nihal",
    link: "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
  },
  {
    id: 4,
    name: "Nivetha",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZd8IFhFAzVB_AdUsDwZMmRzafOAhzsQ_JlQ&usqp=CAU",
  },
];

const LeaveCard = () => {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      columnSpacing={2}
      pl={2}>
      {leaveStatus.map((leave) => (
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "150px",
              borderRadius: "10px",
              border: `2px solid ${leave.color}`,
            }}>
            <CardHeader
              title={<Typography variant="subtitle2">{leave.label}</Typography>}
            />
            <CardContent sx={{ height: "100px", p: 0 }}>
              <LeaveChart total={leave.total} used={leave.used} />
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Card
          sx={{
            height: "150px",
            border: "2px solid #f3797e",
            borderRadius: "10px",
          }}>
          <CardHeader
            title={
              <Typography variant="subtitle2">EMPLOYEE'S BIRTHDAY</Typography>
            }
            subheader={
              <Typography color={"#98bdff"}>
                wish them a happy birthday
              </Typography>
            }
          />
          <CardContent sx={{ height: "100px", p: 0 }}>
            {birthData.length > 0 ? (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <AvatarGroup>
                  {birthData.map((data) => (
                    <BootstrapTooltip title={data.name}>
                      <Avatar
                        sx={{
                          width: "50px",
                          height: "50px",
                        }}
                        src={data.link}
                      />
                    </BootstrapTooltip>
                  ))}
                </AvatarGroup>
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%">
                <Typography variant="subtitle2">No Birthdays Today</Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LeaveCard;
