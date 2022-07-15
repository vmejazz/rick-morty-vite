import { createSlice } from "@reduxjs/toolkit";
import { ICharacter, IInfo } from "../../models";

interface ICharactersStateProps {
  items: ICharacter[];
  info: IInfo;
}

// Начальное значение
const initialState: ICharactersStateProps = {
  items: [],
  info: {},
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setCharactersItems: (state, { payload }) => {
      state.items = payload;
    },
    setCharactersInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setCharactersItems, setCharactersInfo } =
  charactersSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default charactersSlice.reducer;
