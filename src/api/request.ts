import { request } from "./instance";

export const getPaginationPage = (paginationFilter: string) =>
  request(`${paginationFilter}`);

export const getDataRequest = (query: string) => request(query);
