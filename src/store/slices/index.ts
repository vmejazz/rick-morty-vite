import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersReducer";
import locationsReducer from "./locationsReducer";
import episodesReducer from "./episodesReducer";
import appReducer from "./appReducer";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
    app: appReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
