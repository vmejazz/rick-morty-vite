import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../slices";

const storeSelector = (state: IRootState) => state;

export const selectApp = createSelector([storeSelector], (state) => state.app);
