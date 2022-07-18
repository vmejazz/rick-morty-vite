import { createSlice } from "@reduxjs/toolkit";
import { IInfo, ILocation } from "../../models";

interface ILocationsStateProps {
  items: ILocation[];
  info: IInfo;
}

const initialState: ILocationsStateProps = {
  items: [],
  info: {},
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocations: (state, { payload }) => {
      state.items = payload;
    },
    setLocationsInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export const { setLocations, setLocationsInfo } = locationsSlice.actions;

export default locationsSlice.reducer;
