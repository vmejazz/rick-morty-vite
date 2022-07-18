export type IGender = "female" | "male" | "genderless" | "unknown";
export type ILiveStatus = "alive" | "dead" | "unknown";

export interface ICharacterRequest {
  name?: string;
  status?: ILiveStatus;
  species?: string;
  type?: string;
  gender?: IGender;
}

export interface ILocationsRequest {
  name?: string;
  type?: string;
  dimension?: string;
}

export interface IEpisodeRequest {
  name?: string;
  episode?: string;
}
