import React, { useState } from "react";
import { PageHeader } from "./components/PageHeader";
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

  return null;
};

export default App;
