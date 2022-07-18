import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import { ICharacterRequest } from "../../../../models";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../../store/slices/appReducer";

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const FilterLocations = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dimension, setDimension] = useState("");

  const handleOnName = useCallback((event: EventType) => {
    const name = event.target.value;
    setName(name);
    dispatch(setFilter({ name }));
  }, []);

  const handleOnDimension = useCallback((event: EventType) => {
    const dimension = event.target.value;
    setDimension(dimension);
    dispatch(setFilter({ dimension }));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Enter Name</Typography>
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={handleOnName}
          size="small"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Dimension</Typography>
        <TextField
          id="outlined-name"
          label="Dimension"
          value={dimension}
          onChange={handleOnDimension}
          size="small"
        />
      </div>
    </div>
  );
};
