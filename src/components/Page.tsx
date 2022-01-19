import { Box } from "@mui/material";
import { FC } from "react";

export const Page: FC = ({ children }) => {
  return (
    <Box height={"100vh"} bgcolor={"whitesmoke"}>
      <Box display={"flex"} flex={1} p={2}>
        {children}
      </Box>
    </Box>
  );
};
