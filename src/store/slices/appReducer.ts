import { createSlice } from "@reduxjs/toolkit";
import { IFilter, IInfo, IShowType, ItemsType } from "../../models";

interface IAppStateProps {
  isLoading: boolean;
  hasError: boolean;
  showType: IShowType;
  filter?: IFilter;
  infoPage: IInfo;
  latestRequest?: string;
  isApplied: boolean;
}

const initialState: IAppStateProps = {
  isLoading: false,
  hasError: false,
  showType: ItemsType.CHARACTERS,
  filter: {},
  infoPage: {},
  latestRequest: "",
  isApplied: false,
};

const appSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setAppLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setAppError: (state, { payload }) => {
      state.hasError = payload;
    },
    setAppShowType: (state, { payload }) => {
      state.showType = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = { ...state.filter, ...payload };
    },
    setFilterApplied: (state, { payload }) => {
      state.isApplied = payload;
    },
    setInfoPage: (state, { payload }) => {
      state.infoPage = payload;
    },
    setLatestRequest: (state, { payload }) => {
      state.latestRequest = payload;
    },
    clearFilter: (state) => {
      state.filter = {};
      state.isApplied = false;
    },
  },
});

export const {
  setAppLoading,
  setAppError,
  setAppShowType,
  setFilter,
  setInfoPage,
  setLatestRequest,
  clearFilter,
  setFilterApplied,
} = appSlice.actions;

export default appSlice.reducer;
