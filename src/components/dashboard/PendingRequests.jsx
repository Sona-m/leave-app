import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Table,
  Chip,
  Avatar,
  tableCellClasses,
  Tooltip,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { styled } from "@mui/material/styles";

const pendingRows = [
  {
    id: 1,
    from: "Nov 25 Sat",
    to: "Nov 30 Thur",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    manager: [
      {
        name: "Sandeep Kumar",
        status: "approved",
      },
      {
        name: "Nihal Khan",
        status: "rejected",
      },
    ],
  },
  {
    id: 2,
    from: "Feb 28 Wed",
    to: "Mar 05 Mon",
    type: "Casual Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    manager: [
      {
        name: "Mahesh Babu",
        status: "pending",
      },
    ],
  },
  {
    id: 3,
    from: "Apr 25 Sat",
    to: "Apr 30 Thur",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    manager: [
      {
        name: "Gowthami",
        status: "approved",
      },
    ],
  },
  {
    id: 4,
    from: "Nov 25 Sat",
    to: "Nov 30 Thur",
    type: "Sick Leave",
    appliedDate: "18-05-2023",
    approvedDate: "19-05-2023",
    manager: [
      {
        name: "Mahesh Babu",
        status: "pending",
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
    color: "#8a2be2",
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
  borderBottom: "1px solid #E2E1E6",
}));

const StyledTableRow = styled(TableRow)(() => ({
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
    <Tooltip title={label}>
      <Avatar sx={chipStyle}>{colors[status].icon}</Avatar>
    </Tooltip>
  );
}

const PendingRequests = () => {
  return (
    <Card className="dashboard-card" sx={{ height: "400px !important" }}>
      <CardHeader
        title="Leave Application Status"
        className="dashboard-card-header"
      />
      <CardContent className="dashboard-card-content">
        <Table>
          <TableHead
            sx={{
              bgcolor: "#F5F6FA",
              border: "2px solid #8a2be2",
              borderRadius: "4px !important",
            }}>
            <StyledTableRow sx={{ pl: "16px !important" }}>
              <StyledTableHead>Start Date</StyledTableHead>
              <StyledTableHead>End Date</StyledTableHead>
              <StyledTableHead width={150}>Applied Date</StyledTableHead>
              <StyledTableHead width={70}>Status</StyledTableHead>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {pendingRows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.from}</StyledTableCell>
                <StyledTableCell>{row.to}</StyledTableCell>
                <StyledTableCell>{row.appliedDate}</StyledTableCell>
                <StyledTableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {row?.manager.map((item) => (
                      <StyledChip label={item.name} status={item.status} />
                    ))}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PendingRequests;
