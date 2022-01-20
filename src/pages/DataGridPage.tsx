import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { ComponentProps, MouseEvent, useState, VFC } from "react";
import { Page } from "../components/Page";
import { useUsers } from "../utils/hooks/useUsers";

export const DataGridPage: VFC<
  Omit<ComponentProps<typeof Page>, "children">
> = ({ ...props }) => {
  const users = useUsers();
  return (
    <Page {...props}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[20]}
          disableColumnMenu
        />
      </div>
    </Page>
  );
};

const columns = [
  {
    field: "button",
    headerName: "",
    width: 90,
    editable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return <MoreButton row={params.row} />;
    },
  },
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: any) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const MoreButton: VFC<{ row: any }> = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Page 1</MenuItem>
        <MenuItem onClick={handleClose}>Page 2</MenuItem>
        <MenuItem onClick={handleClose}>Page 3</MenuItem>
      </Menu>
    </>
  );
};
