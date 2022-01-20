import { DataGrid } from "@mui/x-data-grid";
import { ComponentProps, VFC } from "react";
import { Page } from "../components/Page";
import { useUsers } from "../utils/hooks/useUsers";

export const SimpleDataGridPage: VFC<
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
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Page>
  );
};

const columns = [
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
