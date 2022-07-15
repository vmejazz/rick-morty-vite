import { createSlice } from "@reduxjs/toolkit";
import { IEpisode, IInfo } from "../../models";

interface IEpisodesStateProps {
  items: IEpisode[];
  info: IInfo;
}

const initialState: IEpisodesStateProps = {
  items: [],
  info: {}
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setEpisodes: (state, { payload }) => {
      state.items = payload;
    },
    setEpisodeInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export const { setEpisodes, setEpisodeInfo } = episodesSlice.actions;

export default episodesSlice.reducer;
