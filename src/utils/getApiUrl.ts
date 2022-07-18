import { IShowType, ItemsType } from "../models";

export const getApiUrl = (type: IShowType) => {
  switch (type) {
    case ItemsType.CHARACTERS:
      return "/character";
    case ItemsType.LOCATIONS:
      return "/location";
    case ItemsType.EPISODES:
      return "/episode";
  }
};
