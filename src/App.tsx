import React, { useState } from "react";
import { PageHeader } from "./components/PageHeader";
import { DataGridPage } from "./pages/DataGridPage";
import { FilterDataGridPage } from "./pages/FilterDataGridPage";
import { SimpleDataGridPage } from "./pages/SimpleDataGridPage";

const App = () => {
  const [type, setType] = useState("simple");

  if (type === "simple") {
    return (
      <SimpleDataGridPage
        header={<PageHeader type={type} setType={setType} />}
      />
    );
  }
  if (type === "filter") {
    return (
      <FilterDataGridPage
        header={<PageHeader type={type} setType={setType} />}
      />
    );
  }

  return <DataGridPage header={<PageHeader type={type} setType={setType} />} />;
};

export default App;
