import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ICharacterRequest,
  IGender,
  ILiveStatus,
} from "../../../../../../models";
import { selectFilter } from "../../../../../../store";
import { setFilter } from "../../../../../../store/slices/appReducer";

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const FilterCharacters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter) as ICharacterRequest;
  const [name, setName] = useState(filter?.name || "");
  const [gender, setGender] = useState(filter?.gender || "unknown");
  const [status, setStatus] = useState(filter?.status || "unknown");
  const [species, setSpecies] = useState(filter?.species || "");

  const handleOnName = useCallback((event: EventType) => {
    const name = event.target.value;
    setName(name);
    dispatch(setFilter({ name }));
  }, []);

  const handleOnGender = useCallback((event: EventType) => {
    const gender = event.target.value as IGender;
    setGender(gender);
    dispatch(setFilter({ gender }));
  }, []);

  const handleOnStatus = useCallback((event: EventType) => {
    const status = event.target.value as ILiveStatus;
    setStatus(status);
    dispatch(setFilter({ status }));
  }, []);

  const handleOnSpecies = useCallback((event: EventType) => {
    const species = event.target.value;
    setSpecies(species);
    dispatch(setFilter({ species }));
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
        <Typography>Species</Typography>
        <TextField
          id="outlined-name"
          label="Species"
          value={species}
          onChange={handleOnSpecies}
          size="small"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Status</Typography>
        <FormControl>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={status}
            onChange={handleOnStatus}
            row
          >
            <FormControlLabel
              value="alive"
              control={<Radio size="small" />}
              label="Alive"
            />
            <FormControlLabel
              value="dead"
              control={<Radio size="small" />}
              label="Dead"
            />
            <FormControlLabel
              value="unknown"
              control={<Radio size="small" />}
              label="Unknown"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Gender</Typography>
        <FormControl>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={gender}
            onChange={handleOnGender}
            row
          >
            <FormControlLabel
              value="male"
              control={<Radio size="small" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio size="small" />}
              label="Female"
            />
            <FormControlLabel
              value="genderless"
              control={<Radio size="small" />}
              label="Genderless"
            />
            <FormControlLabel
              value="unknown"
              control={<Radio size="small" />}
              label="Unknown"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
