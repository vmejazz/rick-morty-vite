import { ItemsType } from "../models";

export const getApiUrl = (type: ItemsType) => {
  switch (type) {
    case ItemsType.CHARACTERS:
      return "/character";
    case ItemsType.LOCATIONS:
      return "/location";
    case ItemsType.EPISODES:
      return "/episode";
  }
};
