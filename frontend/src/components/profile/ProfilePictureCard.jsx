import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Box,
  Badge,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import profile from "../../assets/images/myProfile.jpg";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

const ProfilePictureCard = () => {
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
              Change Profile &nbsp;
              <PeopleOutlineOutlinedIcon />
            </Typography>
          }
          className="accounts-card-header"
        />
        <Box display="flex" justifyContent="center" my={2}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                sx={{ backgroundColor: "primary.main", width: 30, height: 30 }}>
                <AddCircleIcon />
              </Avatar>
            }>
            <Avatar
              sx={{ width: 100, height: 100, borderRadius: "50%" }}
              alt="profile"
              src={profile}
            />
          </Badge>
        </Box>
        <Typography variant="caption" align="center" color={"#AAAAAE"}>
          JPG or PNG. Max size of 800KB
          <br />
          Recommended size: 200x200 or larger
        </Typography>
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="success" sx={{ color: "white" }}>
            Upload a new Picture
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default ProfilePictureCard;
