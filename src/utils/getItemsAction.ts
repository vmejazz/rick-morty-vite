import { ItemsType } from "../models";
import { setCharactersItems } from "../store/slices/charactersReducer";
import { setEpisodes } from "../store/slices/episodesReducer";
import { setLocations } from "../store/slices/locationsReducer";

export const getItemsAction = (type: ItemsType) => {
  switch (type) {
    case ItemsType.CHARACTERS:
      return setCharactersItems;
    case ItemsType.LOCATIONS:
      return setLocations;
    case ItemsType.EPISODES:
      return setEpisodes;
  }
};
