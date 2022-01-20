import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { VFC } from "react";

type Props = {
  type: string;
  setType: (type: string) => void;
};

export const PageHeader: VFC<Props> = ({ type, setType }) => {
  return (
    <Box mx={2}>
      <FormControl>
        <RadioGroup
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          row
        >
          <FormControlLabel value="simple" control={<Radio />} label="Simple" />
          <FormControlLabel value="filter" control={<Radio />} label="Filter" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
