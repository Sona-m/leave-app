import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const LeaveTable = ({ row, columns, color, bgColor }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "1010px",
        height: "calc(100vh - 100px)",
      }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        autoHeight
        disableRowSelectionOnClick
        components={{
          Toolbar: () => null,
        }}
        noRowsOverlay={<Box sx={{ p: 2 }}>No Leaves</Box>}
        getRowId={(row) => row.id}
        sx={{
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
            borderRight: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
          },
          "& .MuiDataGrid-columnHeader:last-child, & .MuiDataGrid-cell:last-child":
            {
              borderRight: "none",
            },
          "& .MuiDataGrid-row": {
            "&:nth-of-type(odd)": {
              backgroundColor: bgColor,
            },
            "&:hover": {
              backgroundColor: bgColor,
            },
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: color,
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            color: "#000",
          },
          height: "-webkit-fill-available !important",
        }}
      />
    </Box>
  );
};

export default LeaveTable;
