import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import { IEpisodeRequest } from "../../../../../../models";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../../../../store";
import { setFilter } from "../../../../../../store/slices/appReducer";

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const FilterEpisodes = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter) as IEpisodeRequest;
  const [name, setName] = useState(filter?.name || "");
  const [episode, setEpisode] = useState(filter?.episode || "");

  const handleOnName = useCallback((event: EventType) => {
    const name = event.target.value;
    setName(name);
    dispatch(setFilter({ name }));
  }, []);

  const handleOnEpisode = useCallback((event: EventType) => {
    const episode = event.target.value;
    setEpisode(episode);
    dispatch(setFilter({ episode }));
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
        <Typography>Episode</Typography>
        <TextField
          id="outlined-name"
          label="Episode"
          value={episode}
          onChange={handleOnEpisode}
          size="small"
        />
      </div>
    </div>
  );
};
