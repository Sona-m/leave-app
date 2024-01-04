import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  Toolbar,
  Avatar,
  ListItemButton,
  CssBaseline,
  AppBar as MuiAppBar,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import profile from "../../assets/images/myProfile.jpg";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import effigo from "../../assets/images/effigo.png";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 180;

const data = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    text: "Leave",
    icon: <EventIcon />,
    link: "/leave",
  },
  {
    text: "Finance",
    icon: <AccountBalanceWalletIcon />,
    link: "/payroll",
  },
  {
    text: "Profile",
    icon: <PersonRoundedIcon />,
    link: "/profile",
  },
];

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  textAlign: "center",
  color: "#000000",
}));

const SideBar = ({ children }) => {
  return (
    <Box display={"flex"}>
      <CssBaseline />
      <AppBar className="glass-drawer white" position="fixed">
        <Toolbar>
          <img src={effigo} alt="logo" height={"25px"} />
          <Typography
            fontWeight={600}
            fontSize={"14px"}
            ml={"auto"}
            mr={1}
            color={"#393887"}>
            Sonam Kumari
          </Typography>
          <Avatar
            alt="Sonam Kumari"
            src={profile}
            sx={{ width: "35px", height: "35px", border: "2px solid #393887" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            px: 2,
            borderRight: "none",
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar
          sx={{
            height: "50px !important",
            display: "flex",
            justifyContent: "space-between",
            minHeight: "50px !important",
          }}>
          <Typography color={"#787A91"}>LOGO</Typography>
        </Toolbar>
        <List>
          {data.map((row, index) => (
            <NavLink to={row.link} key={index} className="nav-link">
              <ListItem key={row.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon className="nav-icon">{row.icon}</ListItemIcon>
                  <ListItemText primary={row.text} color="#D8D8D8" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        minHeight={"100vh"}
        overflowY={"auto"}
        sx={{
          bgcolor: "#f5f7ff",
          flexGrow: 1,
          "& .MuiToolbar-root": {
            minHeight: "50px !important",
          },
        }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default SideBar;
