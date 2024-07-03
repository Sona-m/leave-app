import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Table,
  Avatar,
  Tooltip,
  Grid,
  Stack,
  tableCellClasses,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { styled } from "@mui/material/styles";
import { BootstrapTooltip } from "../component_utils/ComponentUtils";

const pendingRows = [
  {
    id: 1,
    from: "20 Aug 2021",
    to: "21 Aug 2021",
    appliedDate: "19 Aug 2021",
    manager: [
      {
        name: "Shreya",
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    from: "20 Aug 2021",
    to: "21 Aug 2021",
    appliedDate: "19 Aug 2021",
    manager: [
      {
        name: "Shreya",
        status: "pending",
      },
      {
        name: "Shreya",
        status: "rejected",
      },
    ],
  },
  {
    id: 3,
    from: "20 Aug 2021",
    to: "21 Aug 2021",
    appliedDate: "19 Aug 2021",
    manager: [
      {
        name: "Shreya",
        status: "pending",
      },
    ],
  },
  {
    id: 4,
    from: "20 Aug 2021",
    to: "21 Aug 2021",
    appliedDate: "19 Aug 2021",
    manager: [
      {
        name: "Shreya",
        status: "pending",
      },
    ],
  },
  {
    id: 5,
    from: "20 Aug 2021",
    to: "21 Aug 2021",
    appliedDate: "19 Aug 2021",
    manager: [
      {
        name: "Shreya",
        status: "pending",
      },
      {
        name: "Shreya",
        status: "approved",
      },
    ],
  },
];

const StyledTableHead = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: "14px",
    fontWeight: 600,
    height: "36px !important",
    padding: "0px 15px !important",
    color: "#000000 !important",
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "1px solid #f5f7ff",
  padding: "12px",
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#f5f7ff",
    // "& .MuiTableCell-root": {
    //   color: "#000000 !important",
    // },
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#ffffff",
    // "& .MuiTableCell-root": {
    //   color: "#",
    // },
  },
  "&:last-child td": {
    borderBottom: 0,
  },
}));

function StyledChip({ label, status }) {
  const colors = {
    rejected: {
      fontColor: "#E8415B",
      bgColor: "#f2d5d7",
      borderColor: "#e57f7f",
      icon: <CancelOutlinedIcon color="#E8415B" />,
    },
    approved: {
      fontColor: "#47C746",
      bgColor: "rgba(71, 199, 70, 0.10)",
      borderColor: "rgba(71, 199, 70, 0.50)",
      icon: <CheckCircleOutlineOutlinedIcon color="#47C746" />,
    },
    pending: {
      fontColor: "#FFC107",
      bgColor: "rgba(255, 193, 7, 0.10)",
      borderColor: "rgba(255, 193, 7, 0.50)",
      icon: <ErrorOutlineOutlinedIcon color="#FFC107" />,
    },
  };

  const chipStyle = {
    color: colors[status]?.fontColor,
    border: `1px solid ${colors[status]?.borderColor}`,
    backgroundColor: colors[status]?.bgColor,
    width: "20px",
    height: "20px",
  };

  return (
    <BootstrapTooltip title={label}>
      <Avatar sx={chipStyle}>{colors[status].icon}</Avatar>
    </BootstrapTooltip>
  );
}

const PendingRequests = () => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} height={"100%"}>
      <Card className="dashboard-card">
        <CardHeader
          title="Your Pending Leaves"
          className="dashboard-card-header"
        />
        <CardContent className="dashboard-card-content virtual-scroller">
          <Table className="pending-leave-table">
            <TableHead className="pending-leaves-tablehead">
              <StyledTableHead>Start Date</StyledTableHead>
              <StyledTableHead>End Date</StyledTableHead>
              <StyledTableHead width={150}>Applied Date</StyledTableHead>
              <StyledTableHead width={100}>Status</StyledTableHead>
            </TableHead>
            <TableBody>
              {pendingRows.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.from}</StyledTableCell>
                  <StyledTableCell>{row.to}</StyledTableCell>
                  <StyledTableCell>{row.appliedDate}</StyledTableCell>
                  <StyledTableCell>
                    <Stack direction={"row"} spacing={1}>
                      {row?.manager.map((item) => (
                        <StyledChip label={item.name} status={item.status} />
                      ))}
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PendingRequests;
