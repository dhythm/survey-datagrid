import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { ComponentProps, VFC } from "react";
import { Page } from "../components/Page";

export const FilterDataGridPage: VFC<
  Omit<ComponentProps<typeof Page>, "children">
> = ({ ...props }) => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <Page {...props}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          {...(data as any)}
          components={{
            Toolbar: GridToolbar,
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [
                  {
                    columnField: "commodity",
                    operatorValue: "contains",
                    value: "rice",
                  },
                ],
              },
            },
          }}
        />
      </div>
    </Page>
  );
};
