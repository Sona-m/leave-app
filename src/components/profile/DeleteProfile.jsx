import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
  TextField,
  Checkbox,
} from "@mui/material";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";

const DeleteProfile = () => {
  const handleDeleteProfile = () => {
    // Handle delete profile logic here
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="accounts-card">
        <CardHeader
          title={
            <Typography
              fontSize={"18px"}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}>
              Delete Profile &nbsp;
              <PersonRemoveOutlinedIcon />
            </Typography>
          }
          className="accounts-card-header"
        />
        <CardContent>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography variant="caption" color={"error"}>
              Enter UserName and Password
            </Typography>
            <TextField label="Your Username" size="small" />
            <TextField label="Password" type="password" size="small" />
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteProfile}>
              Delete my Profile
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DeleteProfile;
