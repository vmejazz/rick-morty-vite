import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../slices";

const storeSelector = (state: IRootState) => state;

export const selectEpisodes = createSelector([storeSelector], (state) => state.episodes)