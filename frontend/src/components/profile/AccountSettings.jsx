import React from "react";
import { Grid } from "@mui/material";
import ProfilePictureCard from "./ProfilePictureCard";
import ProfilePasswordCard from "./ProfilePasswordCard";
import DeleteProfile from "./DeleteProfile";

const AccountSettings = () => {
  return (
    <Grid container p={2} spacing={2}>
      <ProfilePictureCard />
      <ProfilePasswordCard />
      <DeleteProfile />
    </Grid>
  );
};

export default AccountSettings;
