import {
  ICharacterRequest,
  IEpisodeRequest,
  ILocationsRequest,
} from "../models";
import { request } from "./instance";
import { getRequestData } from "./utils";

// export const getCharacter = (filter?: ICharacterRequest) =>
//   request(`/character/?${getRequestData(filter)}`);

// export const getLocation = (filter: ILocationsRequest) =>
//   request(`/location/?${getRequestData(filter)}`);

// export const getEpisode = (filter: IEpisodeRequest) =>
//   request(`/episode/?${getRequestData(filter)}`);

export const getPaginationPage = (paginationFilter: string) =>
  request(`${paginationFilter}`);

export const getDataRequest = (query: string) => request(query);
