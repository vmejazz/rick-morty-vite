import { Box, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { IFilter } from "../../models";
import { selectApp } from "../../store";

export const FilterStatus = () => {
  const { filter, isApplied } = useSelector(selectApp);

  if (filter && isApplied) {
    const keys = Object.keys(filter) as Array<keyof IFilter>;

    if (keys.length > 0) {
      return (
        <Box sx={{ width: "max-content", marginLeft: "20px" }}>
          <Typography color="black" variant="h5" fontWeight={500}>
            Filtered
            <Divider sx={{ marginBottom: "10px" }} />
          </Typography>
          {keys.map((key) => (
            <Typography color="black" variant="body2" key={key}>
              <span
                style={{ display: "inline-block", width: "100px" }}
              >{`${key.toLocaleUpperCase()}: `}</span>
              <span>{filter[key]}</span>
            </Typography>
          ))}
        </Box>
      );
    }
  }

  return null;
};
