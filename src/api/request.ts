import {
  ICharacterRequest,
  IEpisodeRequest,
  ILocationsRequest,
} from "../models";
import { request } from "./instance";
import { getRequestData } from "./utils";

export const getCharacters = () => request("/character");
export const getCharacter = (filter: ICharacterRequest) =>
  request(`/character/?${getRequestData(filter)}`);

export const getLocations = () => request("/location");
export const getLocation = (filter: ILocationsRequest) =>
  request(`/location/?${getRequestData(filter)}`);

export const getEpisodes = () => request("/episode");
export const getEpisode = (filter: IEpisodeRequest) =>
  request(`/episode/?${getRequestData(filter)}`);
