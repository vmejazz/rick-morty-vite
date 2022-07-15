import { createSlice } from "@reduxjs/toolkit";
import {
  ICharacterRequest,
  IEpisodeRequest,
  ILocationsRequest,
  IShowType,
} from "../../models";

interface IAppStateProps {
  isLoading: boolean;
  hasError: boolean;
  showType?: IShowType;
  filter?: ICharacterRequest | ILocationsRequest | IEpisodeRequest;
}

const initialState: IAppStateProps = {
  isLoading: false,
  hasError: false,
  showType: undefined,
  filter: {},
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
  },
});

export const { setAppLoading, setAppError, setAppShowType, setFilter } =
  appSlice.actions;

export default appSlice.reducer;
