interface LocationType {
  name: string;
  link: string;
}
export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: "female" | "male" | "genderless" | "unknow";
  origin: LocationType;
  location: LocationType;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface IInfo {
  count?: number;
  next?: string;
  pages?: number;
  prev?: string;
}

export interface ICharacterResponse {
  info: IInfo;
  results: ICharacter[];
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}

export interface iEpisodesResponse  {
  results: IEpisode[],
  info: IInfo
}
export interface ILocationsResponse  {
  results: ILocation[],
  info: IInfo
}

