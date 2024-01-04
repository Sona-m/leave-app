import {
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonalDetails from "../components/profile/PersonalDetails";
import EmploymentDetail from "../components/profile/EmploymentDetail";
import AccountSettings from "../components/profile/AccountSettings";

const Profile = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          label="Personal Details"
          icon={<AccountCircleOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Employment Details"
          icon={<BadgeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Account Settings"
          icon={<SettingsOutlinedIcon />}
        />
      </BottomNavigation>
      {value === 0 ? (
        <PersonalDetails />
      ) : value === 1 ? (
        <EmploymentDetail />
      ) : value === 2 ? (
        <AccountSettings />
      ) : null}
    </Box>
  );
};

export default Profile;
