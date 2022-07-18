import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../slices";

const storeSelector = (state: IRootState) => state;

export const selectApp = createSelector([storeSelector], (state) => state.app);

export const selectFilter = createSelector([selectApp], ({ filter }) => filter);
export const selectHasError = createSelector(
  [selectApp],
  ({ hasError }) => hasError
);

export const selectInfoPage = createSelector(
  [selectApp],
  ({ infoPage }) => infoPage
);

export const selectIsApplied = createSelector(
  [selectApp],
  ({ isApplied }) => isApplied
);

export const selectIsLoading = createSelector(
  [selectApp],
  ({ isLoading }) => isLoading
);

export const selectShowType = createSelector(
  [selectApp],
  ({ showType }) => showType
);
