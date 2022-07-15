import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../slices";

const storeSelector = (state: IRootState) => state;

export const selectCharacters = createSelector([storeSelector], (state) => state.characters)