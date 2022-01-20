import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  header?: ReactNode;
};
export const Page: FC<Props> = ({ header, children }) => {
  return (
    <Box height={"100vh"} bgcolor={"whitesmoke"}>
      {header}
      <Box display={"flex"} flex={1} p={2}>
        {children}
      </Box>
    </Box>
  );
};
