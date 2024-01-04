import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  tableCellClasses,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TextField,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import profile from "../../assets/images/myProfile.jpg";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const data = {
  birth: "18-08-2000",
  gender: "female",
  status: "Single",
  nation: "Indian",
  address: "3564 Ella St. Suite 907",
  phone: "6200749488",
  email: "sonamkri1605@gmail.com",
  emergencyContacts: [
    {
      name: "Sonam Kumari",
      relation: "Sister",
      phone: "6200749488",
    },
    {
      name: "Sonam Kumari",
      relation: "Sister",
      phone: "6200749488",
    },
  ],
  education: [
    {
      level: "Btech",
      stream: "Computer Science",
      university: "Acharya Institute of technolody",
    },
    {
      level: "Btech",
      stream: "Computer Science",
      university: "Acharya Institute of technolody",
    },
  ],
};

const StyledTableHead = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: "14px",
    fontWeight: 500,
    height: "36px !important",
    padding: "0px 15px !important",
    color: "#fff",
    borderBottom: "0px",
    background: "#393887",
  },
  "&:first-child": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  "&:last-child": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "0px",
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td": {
    borderBottom: 0,
  },
}));

const PersonalDetails = () => {
  return (
    <Grid container p={2} spacing={1} pt={3}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDirection={"row"}>
        <Avatar
          src={profile}
          sx={{ width: 100, height: 100, borderRadius: "50%" }}
          alt="profile"
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography fontSize={"14px"} fontWeight={"600"}>
            Sonam Kumari
          </Typography>
          <Typography variant="caption">Software Engineer</Typography>
        </Box>
      </Grid>
      <Grid item container md={9} xs={12} sm={12} spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Birth date</Typography>
          <TextField
            type="date"
            value={data.birth}
            size="small"
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Gender</Typography>
          <TextField value={data.gender} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Nationality</Typography>
          <TextField value={data.nation} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Personal Phone no</Typography>
          <TextField value={data.phone} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Personal Email</Typography>
          <TextField value={data.email} size="small" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography className="profile-label">Address</Typography>
          <TextField value={data.address} size="small" />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2} pl={1}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card sx={{ bgcolor: "#98bdff", borderRadius: "10px", padding: 2 }}>
            <Typography
              className="profile-card-header"
              mb={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}>
              Emergency Contacts
              <IconButton>
                <EditRoundedIcon
                  sx={{ height: "16px", width: "16px", color: "#fff" }}
                />
              </IconButton>
            </Typography>
            <Table container>
              <TableHead>
                <TableRow>
                  <StyledTableHead>Name</StyledTableHead>
                  <StyledTableHead>Relation</StyledTableHead>
                  <StyledTableHead>Phone no</StyledTableHead>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.emergencyContacts.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>{item.relation}</StyledTableCell>
                    <StyledTableCell>{item.phone}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card sx={{ bgcolor: "#7879e9", borderRadius: "10px", padding: 2 }}>
            <Typography
              className="profile-card-header"
              mb={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}>
              Education Details
              <IconButton>
                <EditRoundedIcon
                  sx={{ height: "16px", width: "16px", color: "#fff" }}
                />
              </IconButton>
            </Typography>
            <Table container>
              <TableHead>
                <StyledTableRow>
                  <StyledTableHead>Level</StyledTableHead>
                  <StyledTableHead>Stream</StyledTableHead>
                  <StyledTableHead>University</StyledTableHead>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {data.education.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell>{item.level}</StyledTableCell>
                    <StyledTableCell>{item.stream}</StyledTableCell>
                    <StyledTableCell>{item.university}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
