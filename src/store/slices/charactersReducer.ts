import { createSlice } from "@reduxjs/toolkit";
import { ICharacter, IInfo } from "../../models";

interface ICharactersStateProps {
  items: ICharacter[];
  info: IInfo;
}

const initialState: ICharactersStateProps = {
  items: [],
  info: {},
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharactersItems: (state, { payload }) => {
      state.items = payload;
    },
    setCharactersInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export const { setCharactersItems, setCharactersInfo } =
  charactersSlice.actions;

export default charactersSlice.reducer;
