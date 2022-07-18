import { request } from "./instance";

export const getDataRequest = (query: string) => request(query);
