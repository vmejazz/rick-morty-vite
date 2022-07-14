export interface ICharacterRequest {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  species?: string;
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}

export interface ILocationsRequest {
  name?: string;
  type?: string;
  dimension?: string
}

export interface IEpisodeRequest {
  name?: string;
  episode?: string;
}

