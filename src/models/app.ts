import {
  ICharacterRequest,
  ILocationsRequest,
  IEpisodeRequest,
} from "./request";

export enum ItemsType {
  CHARACTERS = "CHARACTERS",
  LOCATIONS = "LOCATIONS",
  EPISODES = "EPISODES",
}

export type IShowType = ItemsType;

export type IFilter = ICharacterRequest | ILocationsRequest | IEpisodeRequest;
