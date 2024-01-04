import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const LeaveTable = ({ row, columns, color, bgColor }) => {
  return (
    <DataGrid
      rows={row}
      className="leave-datagrid"
      columns={columns}
      pageSize={5}
      autoHeight
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      rowsPerPageOptions={[5]}
      slots={{
        noRowsOverlay: () => "No Leaves",
        footer: () => null,
      }}
      initialState={{
        sorting: { sortModel: [{ field: "from", sort: "asc" }] },
      }}
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: color,
          color: "#fff",
          fontWeight: "500",
          fontSize: "16px",
        },
        background: bgColor,
      }}
    />
  );
};

export default LeaveTable;
