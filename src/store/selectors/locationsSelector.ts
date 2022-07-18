import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../slices";

const storeSelector = (state: IRootState) => state;

export const selectLocations = createSelector(
  [storeSelector],
  (state) => state.locations
);
