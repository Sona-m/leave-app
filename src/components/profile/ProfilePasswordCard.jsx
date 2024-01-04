import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ProfilePasswordCard = () => {
  const handleChangePassword = () => {
    // Handle change password logic here
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
              Change Password &nbsp;
              <LockOutlinedIcon />
            </Typography>
          }
          className="accounts-card-header"
        />
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Current Password" type="password" size="small" />
            <TextField label="New Password" type="password" size="small" />
            <TextField label="Confirm New Password" size="small" />
            <Button
              variant="contained"
              color="success"
              sx={{ color: "#fff" }}
              onClick={handleChangePassword}>
              Change Password
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfilePasswordCard;
