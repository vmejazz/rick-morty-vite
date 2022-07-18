import { createSlice } from "@reduxjs/toolkit";
import {
  ICharacterRequest,
  IEpisodeRequest,
  IInfo,
  ILocationsRequest,
  IShowType,
  ItemsType,
} from "../../models";

interface IAppStateProps {
  isLoading: boolean;
  hasError: boolean;
  showType?: IShowType;
  filter?: ICharacterRequest | ILocationsRequest | IEpisodeRequest;
  infoPage: IInfo;
  latestRequest?: string;
}

const initialState: IAppStateProps = {
  isLoading: false,
  hasError: false,
  showType: ItemsType.CHARACTERS,
  filter: {},
  infoPage: {},
  latestRequest: "",
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
    setInfoPage: (state, { payload }) => {
      state.infoPage = payload;
    },
    setLatestRequest: (state, { payload }) => {
      state.latestRequest = payload;
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
} = appSlice.actions;

export default appSlice.reducer;
